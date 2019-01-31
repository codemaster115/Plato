import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

export const StyledTypography = styled(Typography)`
    fontFamily: "Source Sans Pro" !important;
    font-size: 24px !important;
    font-weight: bold !important;
    color: rgb(82, 95, 127) !important;
    margin: 15px !important;
    text-align: center;
`;

class TypographyComponent extends React.Component {
  render() {
    return (
      <StyledTypography component="h1" variant="h4">
        { this.props.typography }
      </StyledTypography>
    );
  }
}

export default TypographyComponent;
