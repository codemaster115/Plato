import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import LoginField from './Login/Field';
import SignupField from './Signup/Field';

import { login } from '../ducks/login';

const Form = styled.form`
    width: 100%;
    margin-top: 8px;
`;

const StyledDivider = styled(Divider)`
    width: 100%;
    margin-left: 0px !important;
`;

const InputSection = styled.div`
    background-color: rgb(246, 249, 252) !important;
    padding: 0px 24px;
`;

const LogInBottom = styled.div`
    padding: 40px 24px 0px;
`;
const StyledButton = styled(Button)`
    height: 40px;
    font-family: "Open Sans" !important;
    font-size: 16px !important;
    margin-bottom: 10px !important;
`;

const StyledLink = styled(Link)`
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin: 5px 0px 10px !important;
`;

class FormComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  UNSAFE_componentWillReceiveProps({ isAuthorized }) {
    if (isAuthorized) {
      this.props.push('./');
    }
    else {
      this.props.push('./login');
    }
  }

  onLogin = () => {    
    if(this.props.path === '/login'){
       this.props.login(this.state);
    }     
  }

  OnUserNameChange = (e) => {    
    this.setState({username: e});    
  }

  OnPasswordChange = (e) => {
    this.setState({password: e});
  }
  render() {
    return (
      <Form>
      <StyledDivider variant="middle" />     
      <InputSection>
        {
          this.props.path === "/login" ? <LoginField userNameChange={this.OnUserNameChange} passwordChange={this.OnPasswordChange}/> : <SignupField />
        }
      </InputSection>
      <StyledDivider variant="middle"/>         
      <LogInBottom>
        <StyledButton
          fullWidth
          variant="contained"
          color="primary"    
          onClick={() => {this.onLogin()}}          
        >
          {
            this.props.path === "/login" ? "Log in" : "Sign up"
          }
        </StyledButton>
        <StyledLink
          component="button"
          variant="body2"
          onClick={() => {
            this.props.path === "/login" ? this.props.push('/signup') : this.props.push('/login')
          }}
        >
          {
            this.props.path === "/login" ? "Sign up here" : "Already signed up ? Log you in"
          }         
        </StyledLink>
      </LogInBottom>              
    </Form>     
    );
  }
}

const mapStateToProps = state => (
  {
    isAuthorized: state.Login.isAuthorized,
  }
);

const mapDispatchToProps = {
  login,
  push,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
