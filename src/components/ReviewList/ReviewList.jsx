import {
  ReviewAuthor,
  ReviewAuthorName,
  ReviewListStyle,
} from './ReviewsList.styled';

export default function ReviewList({ reviews }) {
  return (
    <ReviewListStyle>
      {reviews.map(({ author, content }) => (
        <li>
          <ReviewAuthor>
            Author: <ReviewAuthorName>{author}</ReviewAuthorName>
          </ReviewAuthor>
          <p>{content}</p>
        </li>
      ))}
    </ReviewListStyle>
  );
}
