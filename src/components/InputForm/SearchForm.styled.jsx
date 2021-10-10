import styled from '@emotion/styled';

export const SearchForm = styled.form`
  background-color: #009999;
  display: flex;
  margin: auto;
  margin-bottom: 15px;
  padding: 15px;
  width: 100%;
  max-width: 600px;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
