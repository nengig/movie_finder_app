import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from "react";
import globalStyles from "../shared/GlobalStyles";

import { useDispatch, useSelector } from 'react-redux';
import { clearUserMovieList, getUserMovieList } from "../redux/actions/myMoviesActions";


//My Movies tab Screen
const MyMoviesScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("favourite");
    const [items, setItems] = useState([
        { label: 'Favourites', value: 'favourite' },
        { label: 'Watched movies', value: 'watched' },
        { label: 'Plan to watch', value: 'toWatch' },
        { label: 'Rated Movies', value: 'rating' },
    ]);

    const [loading, setLoading] = useState(true); // Add loading state

    const fetchUsersSavedMovies = () => {
        dispatch(getUserMovieList(value, "50239Ny3RQVo7MGztSSF"));
    }

    useEffect(() => {
        setLoading(true);
        const unsubscribe = fetchUsersSavedMovies();

        return () => {
            dispatch(clearUserMovieList());
            if (typeof unsubscribe === 'function') {
                unsubscribe(); // <- call the function
            }
        }

    }, [value]);

    const movies = useSelector((state) => state.userMovies.movies);


    useEffect(() => {
        if (movies) {
            setLoading(false);
        }
    }, [movies]);


    const handleOnPress = (movieId) => {
        navigation.navigate("Media Details", { movieId: movieId });
    }


    return (
        <View style={[globalStyles.container, styles.containerExtraStyle]}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                textStyle={{
                    fontSize: 18
                }}
                containerStyle={
                    styles.picker
                }
            />
            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#f0f0f0" />
                    {/* <Text color="#f0f0f0">Loading Movies...</Text> */}
                </View>
            ) : movies?.length > 0 ? (
                <FlatList
                    style={styles.listStyle}
                    data={movies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={globalStyles.card} onPress={() => handleOnPress(item.id)}>
                            {item.posterLink ? (
                                <Image
                                    source={{ uri: item.posterLink }}
                                    style={globalStyles.image}
                                />
                            ) : (
                                <View style={globalStyles.noImage}><Text>No Image</Text></View>
                            )}
                            <View style={globalStyles.info}>
                                <View style={globalStyles.infoInnerContainer}>
                                    <Text style={globalStyles.title}>{item.title}</Text>
                                    <Text numberOfLines={6} style={globalStyles.overview}>{item.description}</Text>
                                </View>
                                {value == "rating" && (<Text style={styles.userRating}>User Rating: 🎬 {item.rating}/5</Text>)}
                                <Text style={globalStyles.rating}>⭐ {item.tmdbRating}</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                />
            ) : (
                <View style={styles.noMoviesContainer}>
                    <Text style={styles.noMoviesContainerText}>No Movies added yet.</Text>
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        width: "95%",
        alignSelf: "center",
    },
    listStyle: {
        marginTop: 10,
        width: "98.5%"
    },
    containerExtraStyle: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: "center"
    },
    noMoviesContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    noMoviesContainerText: {
        color: "#f0f0f0",
    },
    loaderContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    userRating: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#f0f0f0",
        marginTop: 5,
        marginBottom: 10
    },
})

export default MyMoviesScreen;
