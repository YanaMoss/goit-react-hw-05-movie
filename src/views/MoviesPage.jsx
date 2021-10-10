import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useLocation, useHistory } from 'react-router';
import queryString from 'query-string';
import { fetchMovieSearch } from '../services/fetchMovie';
import MovieList from '../components/MovieList/MovieList';
import InputForm from '../components/InputForm/InputForm';
import { MoviePageStyle } from '../components/MovieList/MovieList.styled';

export default function MoviesView() {
  const history = useHistory();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [prevStateQuery, setPrevStateQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const queryParams = queryString.parse(history.location.search).query;

  useEffect(() => {
    if (query !== '') {
      setLoading(() => true);
      fetchMovieSearch({ query: query })
        .then(response => {
          setMovies(() => [...response.data.results]);
        })
        .finally(() => {
          setLoading(() => false);
        });
    }
  }, [query]);

  useEffect(() => {
    if (queryParams) {
      setQuery(() => queryParams);
      setLoading(() => true);
      fetchMovieSearch({ query: queryParams })
        .then(response => {
          setMovies(() => [...response.data.results]);
        })
        .finally(() => setLoading(() => false));
    }
  }, [queryParams]);

  const handleChange = e => {
    setMovies([]);
    setQuery('');
    setPrevStateQuery(e.currentTarget.value.replace(' ', '+'));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (prevStateQuery.trim() === '') {
      return;
    }
    setQuery(prevStateQuery);
    history.push({ ...location, search: `query=${prevStateQuery}` });
  };

  return (
    <MoviePageStyle>
      <InputForm
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder={'Search movie'}
      />
      <MovieList movieArray={movies} catalog={'/'} />
      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
    </MoviePageStyle>
  );
}
