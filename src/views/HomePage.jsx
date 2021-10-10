import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { fetchMoviesTrending } from '../services/fetchMovie';
import MovieList from '../components/MovieList/MovieList';
import { HomePageTitle } from '../components/HomePage/HomePage.styled';

export default function HomeView() {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (moviesTrending.length === 0) {
      setLoading(() => true);
      fetchMoviesTrending()
        .then(response => {
          setMoviesTrending(() => [...response.data.results]);
        })
        .finally(() => setLoading(() => false));
    }
  }, [moviesTrending.length]);
  return (
    <section>
      <HomePageTitle>Trending today</HomePageTitle>
      <MovieList movieArray={moviesTrending} catalog={'movies/'} />
      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
    </section>
  );
}
