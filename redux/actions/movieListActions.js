import { GET_POPULAR_MOVIES, GET_TOP_RATED_MOVIES, GET_NOW_PLAYING_MOVIES, GET_UPCOMING_MOVIES, GET_ACTION_MOVIES, GET_COMEDY_MOVIES, GET_CRIME_MOVIES, GET_HORROR_MOVIES, GET_THRILLER_MOVIES } from "../actionTypes/movieListActionTypes";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjkzNDhlZWMzMzk4NjY3NTdmMmUxMTYyNTNlMjY0YyIsIm5iZiI6MTcyMTk1NjYzNy45NDksInN1YiI6IjY2YTJmOTFkYWVlZTA3MTZkMDE0ZWIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vO6xBTvwsNVqvokXWQJpMw6YXaueeK9UEMT8R7rKx2c'
    }
};


export const getPopularMovies = () => dispatch => {
    try {

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {

                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_POPULAR_MOVIES,
                        payload: {
                            title: "Popular",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));
    }
    catch (error) {
        console.log(`Error fetching popular movies. Error: ${error}`);
    }
}

export const getTopRatedMovies = () => dispatch => {
    try {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_TOP_RATED_MOVIES,
                        payload: {
                            title: "Top Rated",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));
    }
    catch (error) {
        console.log(`Error fetching top rated movies. Error: ${error}`);
    }
}

export const getNowPlayingMovies = () => dispatch => {
    try {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_NOW_PLAYING_MOVIES,
                        payload: {
                            title: "Now Playing",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));
    }
    catch (error) {
        console.log(`Error fetching now playing movies. Error: ${error}`);
    }
}

export const getUpcomingMovies = () => dispatch => {
    try {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_UPCOMING_MOVIES,
                        payload: {
                            title: "Upcoming",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));

    }
    catch (error) {
        console.log(`Error fetching upcoming movies. Error: ${error}`);
    }
}


export const getActionMovies = () => dispatch => {
    try {
        //Genre id for action movies in the api is 28
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_ACTION_MOVIES,
                        payload: {
                            title: "Action",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));

    }
    catch (error) {
        console.log(`Error fetching action movies. Error: ${error}`);
    }
}


export const getComedyMovies = () => dispatch => {
    try {
        //Genre id for comedy movies in the api is 35
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_COMEDY_MOVIES,
                        payload: {
                            title: "Comedy",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));

    }
    catch (error) {
        console.log(`Error fetching comedy movies. Error: ${error}`);
    }
}


export const getCrimeMovies = () => dispatch => {
    try {
        //Genre id for crime movies in the api is 80
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_CRIME_MOVIES,
                        payload: {
                            title: "Crime",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));

    }
    catch (error) {
        console.log(`Error fetching crime movies. Error: ${error}`);
    }
}


export const getHorrorMovies = () => dispatch => {
    try {
        //Genre id for horror movies in the api is 27
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_HORROR_MOVIES,
                        payload: {
                            title: "Horror",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));

    }
    catch (error) {
        console.log(`Error fetching horror movies. Error: ${error}`);
    }
}


export const getThrillerMovies = () => dispatch => {
    try {
        //Genre id for thriller movies in the api is 53
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=53', options)
            .then(res => res.json())
            .then(res => {
                const movies = res.results.map((movie) => ({
                    id: movie.id,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    title: movie.title,
                    vote_average: movie.vote_average
                }))

                dispatch(
                    {
                        type: GET_THRILLER_MOVIES,
                        payload: {
                            title: "Thriller",
                            movie_data: movies
                        }
                    }
                )
                return res;
            })
            .catch(err => console.error(err));

    }
    catch (error) {
        console.log(`Error fetching thriller movies. Error: ${error}`);
    }
}