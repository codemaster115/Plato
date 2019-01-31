import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Typography, { StyledTypography } from '../Typography';

describe('<Typograph/>', () => {
  it('compare snapshots', () => {
    const tree = renderer.create(<Typography typography={'test'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correct children', () => {
    const component = shallow(<Typography typography={'test'} />).dive();
    expect(component.props().children).toEqual('test');
  });
});
