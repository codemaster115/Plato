import React from 'react';
import {
  FormControl, 
  Input, 
  InputLabel
 } from '@material-ui/core';

class ButtonComponent extends React.Component {
  render() {
    return (
      <div>
         <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">First Name</InputLabel>
          <Input id="first_name" name="first_name" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="name">Last Name</InputLabel>
          <Input id="last_name" name="last_name" />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" name="email" autoComplete="email" />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input name="password" type="password" id="password" autoComplete="current-password" />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="confirm_password">Confirm your Password</InputLabel>
          <Input name="confirm_password" type="password" id="confirm_password" autoComplete="current-password" />
        </FormControl>
      </div>
    );
  }
}

export default ButtonComponent;
