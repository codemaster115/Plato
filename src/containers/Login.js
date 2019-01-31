import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';

import StyledTypography from '../components/Typography';
import Form from '../components/Form';

const StyledAvatar = styled(Avatar)`
  margin: 15px;
  width: 240px !important;
  height: auto !important;
  overflow: visible !important;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export class LogInLayoutContainer extends React.Component {
  render() {
    return (
      <div>
        <StyledAvatar
          alt="logo"
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1521686436689x671059151878580500%2FArtboard%25203.png?w=256&h=78&auto=compress&fit=crop"
        />
        <StyledTypography typography="Log in" />
        <Form path={this.props.pathname} />
      </div>
    );
  }
}

LogInLayoutContainer.propTypes = {};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

const mapDispatchToProps = {
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogInLayoutContainer);
