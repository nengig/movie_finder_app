import { ScrollView, View, ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MoviesFlatList from "../components/MoviesFlatList";
// import globalStyles from "../shared/GlobalStyles";
import { getActionMovies, getComedyMovies, getCrimeMovies, getHorrorMovies, getNowPlayingMovies, getPopularMovies, getThrillerMovies, getTopRatedMovies, getUpcomingMovies } from "../redux/actions/movieListActions";
import { useEffect, useState } from "react";

//Homepage or Discover Page
const DiscoverMovieScreen = () => {


    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const fetchAllData = async () => {
        try {
            await Promise.all([
                dispatch(getPopularMovies()),
                dispatch(getTopRatedMovies()),
                dispatch(getNowPlayingMovies()),
                dispatch(getUpcomingMovies()),
                dispatch(getActionMovies()),
                dispatch(getComedyMovies()),
                dispatch(getCrimeMovies()),
                dispatch(getThrillerMovies()),
                dispatch(getHorrorMovies())
            ]);
        } catch (error) {
            console.error("Failed to fetch movies", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    const movies = useSelector((state) => state.movies.movies);

    if (loading) {
        return (
            <View style={[styles.container, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
                <ActivityIndicator size="large" color="#6200EE" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {
                Object.entries(movies).map(([key, value], index) => (
                    <MoviesFlatList key={index} movieData={value.movie_data} title={value.title} />
                ))
            }
        </ScrollView>
    )
}

export default DiscoverMovieScreen;

const styles = StyleSheet.create({
    container:{
        // padding: 16,
        paddingVertical: 10,
        width: '100%',
        backgroundColor: 'black'
    }
})
