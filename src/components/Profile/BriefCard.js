import React from 'react';
import {
  Card,
  CardContent
 } from '@material-ui/core';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from './Button';
import MenteeCard from './MenteeCard';

const BriefingCard = styled(CardContent)`     
    display: grid;    
    grid-gap: 15px;
    grid-template-rows: 30px;
`;

class BriefCardComponent extends React.Component {
  render() {
    return (
            <Card>
              <BriefingCard>        
                <div>
                  <Button className="bubble-element Group clickable-element">Add briefing</Button>
                </div>
                <MenteeCard />
              </BriefingCard>                
            </Card> 
    );
  }
}

export default BriefCardComponent;
