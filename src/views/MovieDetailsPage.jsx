import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useRouteMatch, useHistory } from 'react-router';
import { Link, Route } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { fetchMovieDetails } from '../services/fetchMovie';
import Button from '../components/Button/Button';
import Description from '../components/Description/Description';
const Cast = lazy(() => import('./Cast.jsx' /*webpackChunkName: "Cast"*/));
const Reviews = lazy(() =>
  import('./Reviews.jsx' /*webpackChunkName: "Reviews"*/),
);
export default function MovieDetailsPage({ query }) {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const { goBack } = useHistory();
  const [overview, setOverview] = useState('');
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState(
    'https://dummyimage.com/200x300/f0ede4/000333.png&text=No+poster',
  );
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (title === '') {
      fetchMovieDetails(movieId)
        .then(response => {
          getPoster(response.data.poster_path);
          setTitle(() => response.data.title);
          setOverview(() => response.data.overview);
          setGenres(() => response.data.genres);
        })
        .finally();
    }
  });
  const getPoster = posterPath => {
    const urlPoster = 'https://image.tmdb.org/t/p/w300/';
    setPoster(urlPoster + posterPath);
  };
  return (
    <div>
      <Link to={`${url}`}>
        <Button title={'Go back'} onClick={goBack} />
      </Link>
      <Description
        poster={poster}
        title={title}
        overview={overview}
        genres={genres}
      />
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Route path={`${url}/cast`}>
          <Cast idMovie={movieId} />
        </Route>
        <Route path={`${url}/reviews`}>
          <Reviews idMovie={movieId} />
        </Route>
      </Suspense>
    </div>
  );
}
