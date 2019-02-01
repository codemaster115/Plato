import React from 'react';
import styled from 'styled-components';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const SearchBar = styled(FormControl)`
    width: 100%;
`;

class SearchBarComponent extends React.Component {
  render() {
    return (
      <SearchBar margin="normal" required>
        <InputLabel htmlFor="search">Search</InputLabel>
        <Input id="search" name="search" autoFocus />
      </SearchBar>
    );
  }
}

export default SearchBarComponent;
