import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from '../components/NavBar';

const Div = styled.div`
    background-color: rgb(230, 235, 241);
`;

const Content = styled.main`
    position: absolute;
    width: 100%;
    padding: 24px 10%;
    @media (min-width: 1280px) {
      margin-left: 240px;
      width: calc(100% - 240px);
    }
    @media (max-width: 1010px) {            
      width: 100% !important;
      padding: 24px 102px;   
    }
`;

class ProfileLayout extends React.Component {
  render() {    
    return (
      <Div>
        <CssBaseline />        
        <NavBar path={this.props.pathname} />
        <Content>
          {this.props.children}          
        </Content>      
      </Div>
    );
  }
}

ProfileLayout.propTypes = {
  children: PropTypes.object.isRequired,  
};

const mapStateToProps = state => (
  {
    pathname: state.router.location.pathname,
  }
);

const mapDispatchToProps = {
  push,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileLayout);