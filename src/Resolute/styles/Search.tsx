import React from 'react';
import styled from 'styled-components';
import {observer} from 'mobx-react'

import Icon from './Icon'

interface ISearch {
  value?: string;
  onInputChange?: (inputValue: string | undefined) => void;
}

const SearchLayout = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  
  box-sizing: border-box;
  height: 52px;
  padding: 14px;

  background: ${props => props.theme.searchBg};
  border: 1px solid ${props => props.theme.searchBorder};
  border-radius: 2px;

  &:focus-within {
    outline-width: 2px;
    outline-style: solid;
    outline-color: Highlight;
    background: ${props => props.theme.searchBgFocus};
  }
  input {
    flex: 1;
    border: none;
    background: transparent;
    font-family: 'Open Sans', sans-serif;
    font-size: 0.8rem;
    line-height: 20px;
    margin-left: 1rem;
    margin-top: 1px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      
    }
  }
`;

const Search: React.FunctionComponent<ISearch> = observer(({ value = '', onInputChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onInputChange) {
      onInputChange(e.target.value)
    }
  }
  console.log('value')
  return (
  <SearchLayout>
    <Icon icon="search" />
    <input value={value} type="text" onChange={handleChange} placeholder="Search by Email, Property Address, PID, Phone Number, or Contract Name" />
  </SearchLayout>
)});

export default Search;
