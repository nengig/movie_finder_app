import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import MoviesFlatList from "../components/MoviesFlatList";
import globalStyles from "../shared/GlobalStyles";

const DiscoverMovieScreen = () => {

    const movies = useSelector((state) => state.movies.movies);

    return (
        <ScrollView style={globalStyles.container}>
            {
                Object.entries(movies).map(([key, value], index) => (
                    <MoviesFlatList key={index} movieData={value.movie_data} title={value.title} />
                  ))
            }
        </ScrollView>
    )
}

export default DiscoverMovieScreen;

