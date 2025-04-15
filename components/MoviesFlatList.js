import { View, Text, Image, FlatList, TouchableWithoutFeedback } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


// Horizontal Flat list
// const MovieCard = ({ title, image, rating, releaseDate }) => {
const MoviesFlatList = ({ movieData, title }) => {
    // console.log(image);
    const navigation = useNavigation();

    const handleOnMoviePress = (movieId) => {
        console.log("in handleOnMoviePress");
        console.log(movieId)
        navigation.navigate("Media Details", { movieId: movieId });
    }

    return (
        <View>
            <Text style={styles.listTitle}>{title}</Text>
            <FlatList
                style={styles.listStyle}
                data={movieData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.movieCard}>
                        <TouchableWithoutFeedback onPress={() => handleOnMoviePress(item.id)}>
                            <View>
                                {item.poster_path && item.backdrop_path ?
                                    // (<Image source={{ uri: `https://image.tmdb.org/t/p/w185/${item.poster_path ? item.poster_path : item.backdrop_path}` } : require('../images/image_not_found.jpg')}
                                    (<Image source={{ uri: `https://image.tmdb.org/t/p/w185/${item.poster_path ? item.poster_path : item.backdrop_path}` }}
                                        resizeMode="cover"
                                        style={styles.movieCardImage} />
                                    ) : (
                                        <View style={styles.noImage}><Text>No Image</Text></View>
                                    )}

                                <Text style={styles.movieCardTitle}>{item.title}</Text>
                                <Text style={[styles.movieCardRating, { backgroundColor: (item.vote_average >= 7 ? '#68CE68' : (item.vote_average == 0 ? '#8F8E93' : '#F2A43C')) }]}>{(item.vote_average == 0) ? "NR" : item.vote_average.toFixed(1)}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default MoviesFlatList;

const styles = StyleSheet.create({
    listTitle: {
        fontWeight: '400',
        fontSize: 22,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 15,
        color: '#f0f0f0'
    },
    listStyle: {
        paddingHorizontal: 5,
        marginVertical: 5
        
    },

    movieCard: {
        maxWidth: 130,
        // backgroundColor: "gray",
        // padding: 5,
        marginHorizontal: "5",
        
        // borderWidth: 0.5,
        // borderColor: "#f0f0f0",
        // borderRadius: 5
    },
    movieCardTitle: {
        // fontWeight: "bold",
        fontSize: '17',
        maxWidth: 120,
        paddingTop: 5,
        paddingLeft: 2,
        color: '#f0f0f0',

    },
    movieCardImage: {
        width: 120,
        height: 170,
        borderRadius: 5
    },
    movieCardRating: {
        position: "absolute",
        right: "6",
        top: "5",
        borderRadius: 10,
        padding: 5,
        fontWeight: "bold",
        color: "white"
    },
    noImage: {
        width: 120,
        height: 170,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
});