// import React, { useState, useEffect } from 'react';
// import { Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRoute } from '@react-navigation/native';
// import { fetchMovieDetails } from '../redux/actions/mediaDetailsActions';
// import { saveUserMovieDataToFirebase, loadUserMovieDataFromFirebase, saveTestMovieDataToFirebase } from '../config/firebaseFunctions';
// import MovieModal from '../components/MovieModal';  // Import the modal component

// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// const MovieDetails = ({ navigation }) => {
//   const [isFavourited, setIsFavourited] = useState(false);
//   const [userRating, setUserRating] = useState(0);
//   const [statusSelection, setStatusSelection] = useState("favourite");
//   const [modalVisible, setModalVisible] = useState(false); // Modal state to control visibility
//   const [isMovieAdded, setIsMovieAdded] = useState(false); // To check if movie is already in the user's list


//   // const [value, setValue] = 

//   const route = useRoute();
//   const dispatch = useDispatch();

//   const {id} = useSelector((state) => state.users.currentUser); // Replace with auth.currentUser.uid once auth is hooked up
//   const { movieId } = route.params;

//   const { movie, loading, error } = useSelector((state) => state.movieDetails);

//   useEffect(() => {
//     dispatch(fetchMovieDetails(movieId));
//   }, [dispatch, movieId]);

//   useEffect(() => {
//     const fetchUserMovieData = async () => {
//       const data = await loadUserMovieDataFromFirebase(id, movieId);
//       if (data && Object.keys(data).length > 0) {
//         setIsFavourited(data.favourite || false);
//         setStatusSelection(data.status || '');
//         setUserRating(data.rating || 0);

//         const isAdded = Boolean(
//           data.favourite === true ||
//           (typeof data.status === 'string' && data.status.length > 0) ||
//           (typeof data.rating === 'number' && data.rating > 0)
//         );
//         setIsMovieAdded(isAdded);
//       } else {
//         setIsMovieAdded(false);
//       }

//     };

//     fetchUserMovieData();
//   }, [id, movieId]);

//   const handleSave = async () => {
//     const newUserMovieData = {
//       favourite: isFavourited,
//       status: statusSelection,
//       rating: userRating,  // The user rating
//     };

//     const posterLink = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '';
//     const description = movie.overview || '';

//     try {
//       await saveTestMovieDataToFirebase(id, movieId, newUserMovieData, movie.title, movie.vote_average, posterLink, description);
//       const confirmedData = await loadUserMovieDataFromFirebase(id, movieId);
//       console.log('Read back from Firebase:', confirmedData);
//       setModalVisible(false); // Close modal after saving
//     } catch (err) {
//       console.error("Failed to save movie data to Firebase:", err);
//     }
//   };

//   if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
//   if (error) return <Text style={styles.text}>Error: {error}</Text>;
//   if (!movie) return <Text style={styles.text}>No movie details available.</Text>;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }} style={styles.poster} />
//       <Text style={styles.title}>{movie.title}</Text>
//       <Text style={styles.text}>{movie.release_date}</Text>
//       <Text style={styles.text}>{movie.overview}</Text>
//       <Text style={styles.castText}>Cast:</Text>
//       {movie.cast && movie.cast.slice(0, 10).map((castMember) => (
//         <Text key={castMember.id} style={styles.castText}>{castMember.name}</Text>
//       ))}



//       {/* Show if movie is added */}
//       {isMovieAdded && (
//         <Text style={styles.text}>This movie is already added to your list.</Text>
//       )}

//       {/* Button to open the modal */}
//       <Button title="Edit Movie Details" onPress={() => setModalVisible(true)} />

//       {/* Modal for editing movie details */}
//       <MovieModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         statusSelection={statusSelection}
//         setStatusSelection={setStatusSelection}
//         isFavourited={isFavourited}
//         toggleFavourite={() => setIsFavourited(!isFavourited)}
//         userRating={userRating}
//         setUserRating={setUserRating}
//         onSave={handleSave}
//       />

//     </ScrollView>
//   );
// };

// export default MovieDetails;



// const colors = {
//   background: '#1a1a1a',  
//   text: '#f0f0f0',  
//   accent: '#e57373',  
//   cardBackground: '#2c2c2c',  
//   border: '#444',  
// //   buttonBackground: '#e57373', 
// //   buttonText: '#fff',  
// };

// export const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: colors.background,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     color: colors.text,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: colors.text,
//     marginBottom: 16,
//   },
//   text: {
//     color: colors.text,
//     fontSize: 16,
//   },
// //   button: {
// //     backgroundColor: colors.buttonBackground, 
// //     padding: 12,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: colors.buttonText,
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
//   card: {
//     backgroundColor: colors.cardBackground,
//     padding: 20,
//     borderRadius: 10,
//     marginVertical: 10,
//     borderWidth: 1,
//     borderColor: colors.border,
//   },
//   image: {
//     width: 200,
//     height: 300,
//     borderRadius: 10,
//   },
//   poster: {
//     width: 100,  
//     height: 150,  
//     borderRadius: 5,
//     marginRight: 15,  
//   },
//   header: {
//     fontSize: 28,
//     color: colors.text,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   castText: {
//     color: colors.accent,  
//   },
//   loadingText: {
//     color: colors.text,
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   cardContent: {
//     flexDirection: 'row',  
//     alignItems: 'center',  
//   },
//   textContainer: {
//     flex: 1,  
//   },
// });


import React, { useState, useEffect } from 'react';
import { Text, Image, ScrollView, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { fetchMovieDetails } from '../redux/actions/mediaDetailsActions';
import { saveUserMovieDataToFirebase, loadUserMovieDataFromFirebase, saveTestMovieDataToFirebase } from '../config/firebaseFunctions';
import MovieModal from '../components/MovieModal';  // Import the modal component

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = ({ navigation }) => {
  const [isFavourited, setIsFavourited] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [statusSelection, setStatusSelection] = useState("favourite");
  const [modalVisible, setModalVisible] = useState(false); // Modal state to control visibility
  const [isMovieAdded, setIsMovieAdded] = useState(false); // To check if movie is already in the user's list

  const route = useRoute();
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.users.currentUser); // Replace with auth.currentUser.uid once auth is hooked up
  const { movieId } = route.params;

  const { movie, loading, error } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
  }, [dispatch, movieId]);

  useEffect(() => {
    const fetchUserMovieData = async () => {
      const data = await loadUserMovieDataFromFirebase(id, movieId);
      if (data && Object.keys(data).length > 0) {
        setIsFavourited(data.favourite || false);
        setStatusSelection(data.status || '');
        setUserRating(data.rating || 0);

        const isAdded = Boolean(
          data.favourite === true ||
          (typeof data.status === 'string' && data.status.length > 0) ||
          (typeof data.rating === 'number' && data.rating > 0)
        );
        setIsMovieAdded(isAdded);
      } else {
        setIsMovieAdded(false);
      }
    };

    fetchUserMovieData();
  }, [id, movieId]);

  const handleSave = async () => {
    const newUserMovieData = {
      favourite: isFavourited,
      status: statusSelection,
      rating: userRating,  // The user rating
    };

    const posterLink = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '';
    const description = movie.overview || '';

    try {
      await saveTestMovieDataToFirebase(id, movieId, newUserMovieData, movie.title, movie.vote_average, posterLink, description);
      const confirmedData = await loadUserMovieDataFromFirebase(id, movieId);
      console.log('Read back from Firebase:', confirmedData);
      setModalVisible(false); // Close modal after saving
    } catch (err) {
      console.error("Failed to save movie data to Firebase:", err);
    }
  };

  if (loading) return <Text style={styles.loadingText}>Loading...</Text>;
  if (error) return <Text style={styles.text}>Error: {error}</Text>;
  if (!movie) return <Text style={styles.text}>No movie details available.</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.posterWrapper}>
        <Image source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }} style={styles.poster} />
      </View>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.releaseDate}>{movie.release_date}</Text>
      <Text style={styles.text}>{movie.overview}</Text>

      <Text style={styles.castText}>Cast:</Text><Text style={styles.castMemberText}>
        {movie.cast && movie.cast.slice(0, 10).map((castMember) => (
          castMember.name + ", "
        ))}
      </Text>

      {/* Show if movie is added */}
      {isMovieAdded && (
        <Text style={[styles.text, { color: "#e57373" }]}>This movie is already added to your list.</Text>
      )}

      {/* Button to open the modal */}
      {/* <Button title="Edit Movie Details" onPress={() => setModalVisible(true)} /> */}

      <TouchableOpacity
        style={styles.myMoviesBtn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.myMoviesText}>Add to My Movies</Text>
      </TouchableOpacity>

      {/* Modal for editing movie details */}
      <MovieModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        statusSelection={statusSelection}
        setStatusSelection={setStatusSelection}
        isFavourited={isFavourited}
        toggleFavourite={() => setIsFavourited(!isFavourited)}
        userRating={userRating}
        setUserRating={setUserRating}
        onSave={handleSave}
      />
    </ScrollView>
  );
};

export default MovieDetails;

const colors = {
  background: 'black',
  text: '#f0f0f0',
  accent: '#00ccf7',
  cardBackground: '#2c2c2c',
  border: '#444',
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  releaseDate: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 12,
  },
  text: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 12,
  },
  castText: {
    fontSize: 18,
    color: colors.accent,
    marginBottom: 8,
  },
  castMemberText: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
  },
  loadingText: {
    color: colors.text,
    fontSize: 18,
    textAlign: 'center',
  },
  posterWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 16,
  },

  myMoviesBtn: {
    width: '50%',
    alignSelf: 'center',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: "#00ccf7"
  },

  myMoviesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
