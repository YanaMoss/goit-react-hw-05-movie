import { ButtonStyle } from './Button.styled';
export default function Button({ title, onClick }) {
  return (
    <ButtonStyle type="submit" onClick={onClick}>
      {title}
    </ButtonStyle>
  );
}
