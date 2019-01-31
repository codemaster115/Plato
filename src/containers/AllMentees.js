import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';

const TableContainer = styled.div`
    width: 100%;    
`;

class AllMenteesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
        <TableContainer>
          All mentees page!
        </TableContainer>
      </div>
    );
  }
}

AllMenteesContainer.propTypes = {  
};

export default AllMenteesContainer;
