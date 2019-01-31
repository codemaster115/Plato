import React from 'react';
import { FormControl, Input, InputLabel, Link } from '@material-ui/core';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 5px 0px 10px !important;
`;

export default class ButtonComponent extends React.Component {
  onEmailChange = e => {
    this.props.userNameChange(e.target.value);
  };

  onPasswordChange = e => {
    this.props.passwordChange(e.target.value);
  };

  render() {
    return (
      <div>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.onEmailChange}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.onPasswordChange}
          />
        </FormControl>
        <StyledLink
          component="button"
          variant="body2"
          onClick={() => {
            this.onValChange();
          }}
        >
          Forgot your password?
        </StyledLink>
      </div>
    );
  }
}
