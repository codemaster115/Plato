import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';

export const Main = styled.main`
    display: block;
    width: 400px;
    margin: auto;
`;

export const StyledPaper = styled(Paper)`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0px 24px;
`;

class AuthLayout extends React.Component {
  render() {
    return (
      <Main>
       <CssBaseline />
         <StyledPaper>        
          {this.props.children}
         </StyledPaper>         
      </Main>
    );
  }
}

export default AuthLayout;
