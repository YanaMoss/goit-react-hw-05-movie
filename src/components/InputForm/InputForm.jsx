import Button from '../Button/Button';
import { SearchForm, SearchFormInput } from './SearchForm.styled';
export default function InputForm({ onSubmit, onChange, placeholder }) {
  return (
    <SearchForm onSubmit={onSubmit}>
      <SearchFormInput
        type="text"
        autocomplete="off"
        autofocus
        placeholder={placeholder}
        onChange={onChange}
      />
      <Button title={'Search'} />
    </SearchForm>
  );
}
