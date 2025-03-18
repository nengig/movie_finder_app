import { View, Text, Image, FlatList } from "react-native";
import globalStyles from "../shared/GlobalStyles";
import { StyleSheet } from "react-native";

// const MovieCard = ({ title, image, rating, releaseDate }) => {
const MoviesFlatList = ({ movieData, title }) => {
    // console.log(image);
    return (
        <View>
            <Text style={styles.listTitle}>{title}</Text>
            <FlatList
                style={styles.listStyle}
                data={movieData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={globalStyles.movieCard}>
                        <Image source={(item.poster_path && item.backdrop_path ? { uri: `https://image.tmdb.org/t/p/w185/${item.poster_path? item.poster_path : item.backdrop_path}` } : require('../images/image_not_found.jpg'))}
                            resizeMode="stretch"
                            style={globalStyles.movieCardImage} />
                        <Text style={globalStyles.movieCardTitle}>{item.title}</Text>
                        <Text style={[globalStyles.movieCardRating, { backgroundColor: (item.vote_average >= 7 ? '#68CE68' : (item.vote_average == 0 ? '#8F8E93' : '#F2A43C')) }]}>{(item.vote_average == 0) ? "NR" : item.vote_average.toFixed(1)}</Text>
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
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 20,
        paddingBottom: 0,
        paddingTop: 15,
    },
    listStyle: {
        paddingHorizontal: 10,
        marginVertical: 10
    }
});