import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, ActivityIndicator, Animated, TextInput, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import globalStyles from '../shared/GlobalStyles';
import { clearMovieSearchResults, fetchMoviesBySearch } from '../redux/actions/searchMovieActions';
import { useDispatch, useSelector } from 'react-redux';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const SearchMovieScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const inputWidth = useRef(new Animated.Value(0)).current;

    const dispatch = useDispatch();

    const { searchedMovies: movieResults = [], total_pages } = useSelector((state) => state.searchMovie);
    // setMovies(movieResults);

    useEffect(() => {
        Animated.timing(inputWidth, {
            toValue: searchTerm ? 1 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
    }, [searchTerm]);

    const handleSearch = async () => {
        if (searchTerm) {
            await dispatch(clearMovieSearchResults());
            setPage(1); // Reset page to 1 on new search
            fetchMovies(1);
        }
    };

    const fetchMovies = async (pageNumber) => {
        if (loading) return;
        setLoading(true);

        try {
            await dispatch(fetchMoviesBySearch(searchTerm, pageNumber));
            setPage(pageNumber);
        } catch (error) {
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // if (movieResults && page === 1) {
        //     setMovies(movieResults); // Replace results for first page
        // } else if (movieResults && page > 1) {
        //     setMovies(prev => [...prev, ...movieResults]); // Append for pagination
        // }

        setMovies(movieResults); // Replace results for first page
    
        setHasMore(page < total_pages); // Update hasMore flag
    }, [movieResults, total_pages]);
    

    const loadMoreMovies = () => {
        if (hasMore) {
            fetchMovies(page + 1);
        }
    };

    const handleOnPress = (movieId) => {
        navigation.navigate("Media Details", { movieId: movieId });
    };

    const renderMovieItem = ({ item }) => (
        <TouchableOpacity style={globalStyles.card} onPress={() => handleOnPress(item.id)}>
            {item.poster_path ? (
                <Image
                    source={{ uri: IMAGE_BASE_URL + item.poster_path }}
                    style={globalStyles.image}
                />
            ) : (
                <View style={globalStyles.noImage}><Text>No Image</Text></View>
            )}
            <View style={globalStyles.info}>
                <Text style={globalStyles.title}>{item.title}</Text>
                <Text numberOfLines={6} style={globalStyles.overview}>{item.overview}</Text>
                <Text style={globalStyles.rating}>⭐ {item.vote_average}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                    borderRadius: 10,
                    margin: 12,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                }}
            >
                <Icon
                    name="search-outline"
                    size={20}
                    color="gray"
                    style={{ marginRight: 8 }}
                />

                <Animated.View
                    style={{
                        flex: 1,
                        width: inputWidth.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["80%", "100%"],
                        }),
                    }}
                >
                    <TextInput
                        placeholder="Search movies..."
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        style={{ fontSize: 16, width: "100%" }}
                        returnKeyType="done"
                        onSubmitEditing={handleSearch}
                    />
                </Animated.View>

                {searchTerm.length > 0 && (
                    <TouchableOpacity onPress={() => {
                        setSearchTerm("");
                        setMovies([]);
                        setPage(1);
                        setHasMore(true);
                        dispatch(clearMovieSearchResults());
                    }}>
                        <Icon name="close-circle" size={20} color="gray" />
                    </TouchableOpacity>
                )}
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderMovieItem}
                    ListFooterComponent={() =>
                        loading ? <ActivityIndicator size="large" color="indigo" />
                            : hasMore && movies.length > 0 ? (
                                <TouchableOpacity
                                    style={styles.loadMoreButton}
                                    onPress={loadMoreMovies}
                                >
                                    <Text style={styles.loadMoreText}>Load More</Text>
                                </TouchableOpacity>
                            )
                                : <Text style={{ textAlign: 'center', margin: 16 }}>No more results</Text>
                    }
                />
            </View>
        </View>
    );
};

export default SearchMovieScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
    },
    loadMoreButton: {
        width: '30%',
        alignSelf: 'center',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30,
        backgroundColor: "#00ccf7"
    },

    loadMoreText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});
