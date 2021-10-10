import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import {
  DescriptionContainer,
  DescriptionList,
  DescriptionTitle,
  DescriptionContainerItem,
  DescriptionGenres,
  DescriptionGenresItem,
  DescriptionListItem,
} from './Description.styled';
export default function Description(props) {
  const { poster, title, overview, genres } = props;
  const { url } = useRouteMatch();
  return (
    <DescriptionContainer>
      <img src={poster} alt="" />
      <DescriptionContainerItem>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionList>
          <li>
            <h3>Overview</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            <DescriptionGenres>
              {genres.map(({ name }) => (
                <DescriptionGenresItem>{name}</DescriptionGenresItem>
              ))}
            </DescriptionGenres>
          </li>
          <li>
            <h3>Additional information</h3>
            <DescriptionList>
              <DescriptionListItem>
                <Link to={`${url}/cast`}>Cast</Link>
              </DescriptionListItem>
              <DescriptionListItem>
                <Link to={`${url}/reviews`}>Reviews</Link>
              </DescriptionListItem>
            </DescriptionList>
          </li>
        </DescriptionList>
      </DescriptionContainerItem>
    </DescriptionContainer>
  );
}
