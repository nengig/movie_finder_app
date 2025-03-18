
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles.js';

// dummy list to link to details page
const API_KEY = 'b9ca7ecbc0ca0bf1db1495419f2c05ca';
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';  // Fetching popular movies
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  // Fetching the movie data from the API
  useEffect(() => {
    fetch(`${BASE_URL}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text style={styles.text}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.text}>Error: {error}</Text>;  // Show error message if fetching fails
  }

  const handleMoviePress = (movieId) => {
    navigation.navigate('MediaDetails', { movieId });
  };

  const renderItem = ({ item: movie }) => (
    <TouchableOpacity
      key={movie.id}
      onPress={() => handleMoviePress(movie.id)}
      style={styles.card}
    >
      {movie.poster_path && (
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
          style={styles.poster}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.text}>{movie.release_date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {movies.length === 0 ? (
        <Text style={styles.text}>No movies found.</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
};

export default MovieList;
