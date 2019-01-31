import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '@material-ui/core';

import Field from './Field';

describe('<Field/>', () => {
  const props = {
    userNameChange: jest.fn(),
    passwordChange: jest.fn()
  };

  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Field {...props}/>);
  })

  it('change email & password', () => {
    wrapper
      .find(Input)
      .at(0)
      .prop('onChange')({
      target: { name: 'email', email: 'test@test.com' },
    });

    expect(props.userNameChange).toHaveBeenCalledTimes(1);
    
    wrapper
      .find(Input)
      .at(1)
      .prop('onChange')({
      target: { name: 'password', email: 'test1234' },
    });

    expect(props.passwordChange).toHaveBeenCalledTimes(1);
  });
});
