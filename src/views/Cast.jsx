import { useState, useEffect } from 'react';
import CastList from '../components/CastList/CastList';
import { CastListStyle } from '../components/CastList/CastList.styled';
import { fetchMovieCredits } from '../services/fetchMovie';
export default function Cast({ idMovie }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (cast.length === 0) {
      fetchMovieCredits(idMovie)
        .then(response => {
          setCast(() => response.data.cast);
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .finally();
    }
  });

  return (
    <CastListStyle>
      <CastList cast={cast} />
    </CastListStyle>
  );
}
