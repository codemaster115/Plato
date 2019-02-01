import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import NavBar from '../components/NavBar';

import { login } from '../ducks/login';

const Div = styled.div`
  display: flex;
  background-color: rgb(230, 235, 241);
`;

const StyledToolbar = styled(Toolbar)`
  height: 64px;
`;

const Content = styled.main`
  position: absolute;
  width: 100%;
  padding: 24px 10%;
  @media (min-width: 1280px) {
    margin-left: 240px;
    width: calc(100% - 240px);
  }
`;

class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Authorized: false,
    };
  }

  componentDidMount() {
    if (!this.props.isAuthorized) {
      this.props.push('./login');
    } else {
      this.setState({ Authorized: true });
    }
  }

  UNSAFE_componentWillReceiveProps({ isAuthorized }) {
    this.setState({ Authorized: isAuthorized });
    if (!isAuthorized) {
      this.props.push('./login');
    }
  }

  render() {
    return (
      <Div>
        <CssBaseline />
        <NavBar path={this.props.pathname} />
        <Content>
          <StyledToolbar />
          {this.props.children}
        </Content>
      </Div>
    );
  }
}

HomeLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  isAuthorized: state.Login.isAuthorized,
});

const mapDispatchToProps = {
  login,
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeLayout);
