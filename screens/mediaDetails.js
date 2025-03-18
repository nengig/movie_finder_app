import React, { useState, useEffect } from 'react';
import { Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { styles } from '../styles.js';

const API_KEY = 'b9ca7ecbc0ca0bf1db1495419f2c05ca';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MediaDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // get movieID from movieList
  const route = useRoute();
  const { movieId } = route.params;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (error) {
    return <Text style={styles.text}>Error: {error}</Text>;
  }

  if (!movieDetails) {
    return <Text style={styles.text}>No movie details available.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movieDetails.poster_path}` }}
        style={styles.poster}
      />
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.text}>{movieDetails.release_date}</Text>
      <Text style={styles.text}>{movieDetails.overview}</Text>
      <Text style={styles.castText}>Cast:</Text>

      {/* cast members */}
      {movieDetails.cast && movieDetails.cast.map((castMember) => (
        <Text key={castMember.id} style={styles.castText}>{castMember.name}</Text>
      ))}
    </ScrollView>
  );
};

export default MediaDetails;
