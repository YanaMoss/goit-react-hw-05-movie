import { CastListCard, CastListCardContetnt } from './CastList.styled';
export default function CastList({ cast }) {
  return (
    <CastListCard>
      {cast.map(({ name, profile_path, character }) => (
        <CastListCardContetnt>
          <h3>{name}</h3>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w200${profile_path}`
                : 'https://dummyimage.com/200x300/f0ede4/000333.png&text=No+photo'
            }
            alt={name}
          />
          <p>Character: {character}</p>
        </CastListCardContetnt>
      ))}
    </CastListCard>
  );
}
