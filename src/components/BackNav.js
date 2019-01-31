import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const BackIcon = styled.button`    
    box-sizing: border-box;    
    height: 18px;
    width: 18px;        
    padding: 0px;
    text-align: center;
    cursor: inherit;
    background: none;
    border: none;
    color: rgb(66, 71, 112);
    font-size: 18px;    
`;

const BackLabel = styled.span`    
    margin-left: 5px;  
`;

const BackItem = styled.div`    
    cursor: pointer;
    padding: 0px 70px;
`;

export class BackNavButton extends React.Component {
  render() {
    return (
      <BackItem onClick={() => {this.props.push('/')}}>
        <BackIcon className="fa fa-chevron-left inner-element bubble-element"/>
        <BackLabel>Back</BackLabel>
      </BackItem>
    );
  }
}

const mapDispatchToProps = {
  push,
}


export default connect(mapDispatchToProps)(BackNavButton);
