import { getFirestore, doc, setDoc, getDoc,  } from 'firebase/firestore'; 

const db = getFirestore();

// Save a test movie entry to Firestore
export const saveTestMovieDataToFirebase = async (
  userId,
  movieId,
  movieData,
  movieTitle,
  tmdbRating,
  posterLink,
  description
) => {
  try {
    const movieRef = doc(db, 'users', userId, 'movies', movieId.toString());

    const fullMovieData = {
      ...movieData,
      title: movieTitle || 'Test Movie',
      tmdbRating: tmdbRating || 0,
      posterLink: posterLink || '',
      description: description || '',
    };

    await setDoc(movieRef, fullMovieData, { merge: true });

    console.log(`Test movie data saved for user ${userId}:`, fullMovieData);
  } catch (error) {
    console.error('Error saving test movie data:', error);
  }
};



// Save or update user-specific movie data (with both user rating and API rating)
export const saveUserMovieDataToFirebase = async (userId, movieId, movieData, movieTitle, apiRating, posterLink, description) => {
  try {
    const movieRef = doc(db, 'users', userId, 'movies', movieId.toString());

    // Include both the user and API ratings, poster link, and description
    const newMovieData = {
      ...movieData,
      title: movieTitle,
      apiRating,        // API rating
      posterLink,       // Movie poster link
      description,      // Movie description
    };

    await setDoc(movieRef, newMovieData, { merge: true });
    console.log(`Movie (${movieTitle}) data saved/updated for user ${userId}.`);
  } catch (error) {
    console.error('Error saving user movie data:', error);
  }
};

// Load and categorize all user movie data (this remains unchanged)
// Load a single user's movie data by movieId
export const loadUserMovieDataFromFirebase = async (userId, movieId) => {
  const movieRef = doc(db, 'users', userId, 'movies', movieId.toString());
  const docSnap = await getDoc(movieRef);  // Get document snapshot

  if (docSnap.exists()) {
    return docSnap.data();  // Return the data if the movie exists
  } else {
    console.log('No such document!');
    return null;  // Return null if no movie is found
  }
};

