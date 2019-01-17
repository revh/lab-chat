import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch)

const SearchContainer = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: #f1eded;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
`;

const IconContainer = styled.div`
  width: 18px;
  height: 18px;
`;

const SearchInputContainer = styled.div`
  margin-left: 10px;
  flex: 1;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  width: 100%;
  height: 25.6px;
  font-family: Arial;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #181c2f;

  &:focus {
    outline: none;
  }
`;

const SearchBox = ({ placeholder, value, onChange, onSubmit }) => (
  <SearchContainer onSubmit={onSubmit} action="">
    <label for="searchInput">
      <IconContainer>
        <FontAwesomeIcon icon="search" color="#292f4c" />
      </IconContainer>
    </label>

    <SearchInputContainer>
      <SearchInput
        id="searchInput"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </SearchInputContainer>
  </SearchContainer>
);

SearchBox.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => { },
  onSubmit: () => { }
};

export default SearchBox