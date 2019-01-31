import React from 'react';
import { connect } from 'react-redux';
import StyledTypography from '../components/Typography';
import Form from '../components/Form';

export class SignupLayoutContainer extends React.Component {
  onValChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <StyledTypography typography="Sign up to Plato Back-office" />
        <Form path={this.props.pathname} />
      </div>
    );
  }
}

SignupLayoutContainer.propTypes = {};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupLayoutContainer);
