import { Link, useRouteMatch } from 'react-router-dom';
import { MovieListStyle } from './MovieList.styled';
export default function MovieList(props) {
  const { url } = useRouteMatch();
  const { movieArray, catalog } = props;

  return (
    <MovieListStyle>
      {movieArray.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`${url}${catalog}${id}`}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : 'https://dummyimage.com/200x300/f0ede4/000333.png&text=No+poster'
              }
              alt={title}
              width="100"
            />
            <p>{title} </p>
          </Link>
        </li>
      ))}
    </MovieListStyle>
  );
}
