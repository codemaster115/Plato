import React from 'react';
import {
  Card,
  CardContent,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField  
 } from '@material-ui/core';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from './Button';

const TextIndex = styled.div`     
    box-sizing: border-box;    
    height: 25px;
    width: 411.418px;        
    overflow: visible;
    font-family: Lato;
    font-size: 14px;
    color: rgb(112, 112, 112);
    line-height: 1.4;
    padding-top: 3.5px;        
`;

const MentorLeft = styled.div`     
    display: grid;        
    grid-template-rows: 37px 53px 120px 55px;
`;

const SharpType = styled.div`     
    display: grid;    
    grid-gap: 5px;
    grid-template-columns: 75px 250px 75px;
`;

const StyledSelect = styled(Select)`     
    margin: 0px !important;
`;

const StyledTextField = styled(TextField)`     
    width: 300px;
`;

const StyledMultiTextField = styled(TextField)`     
    width: 300px;    
`;

const MentorRight = styled.div`     
    display: grid;        
    grid-template-rows: 37px 53px 120px;
`;

const Icons = styled.div`    
`;

const MentorIcon = styled.button`        
    box-sizing: border-box;    
    height: 20px;
    width: 17.9084px;    
    text-align: center;
    cursor: pointer;
    background: none;
    border: none;
    color: rgba(69, 75, 128, 0.7);
    font-size: 17.9084px;
    border-radius: 4px;
    float: right;
    margin-right: 10px;
    &:hover {
      color: rgb(69, 75, 128);
    }
`;

const AddMentor = styled.div`
    padding-top: 23px;
`;

const Submit = styled.div`
    text-align: right;
    color: red;
    float: right;
    padding-top: 70px;
`;

const SubButton = styled(Button)`
    padding: 8px 26px;
    background-color: rgb(199, 199, 199);
    margin-top: 5px;
`;

const MentorButton = styled(Button)`
    padding: 8px 13px;    
`;

const MentorCard = styled(CardContent)`     
    display: grid;    
    grid-gap: 10px;
    grid-template-columns: 50% 50%;
    height: 300px;
`;

class ButtonComponent extends React.Component {
  
  render() {
    return (
             <Card>
                <MentorCard>
                  <MentorLeft>
                    <SharpType>
                      <TextIndex>Share type</TextIndex>
                      <FormControl>
                        <InputLabel htmlFor="sharp-types"></InputLabel>
                        <StyledSelect
                           value=""
                          // onChange={handleChange}
                          // inputProps={{
                          //   name: 'type',
                          //   id: 'sharp-types',
                          // }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={1}>Spontaneous chat on Slack</MenuItem>
                          <MenuItem value={2}>CS</MenuItem>
                          <MenuItem value={3}>During an intial call</MenuItem>
                        </StyledSelect>
                      </FormControl>
                      <TextIndex>
                        <strong>
                            Temporary
                        </strong>
                      </TextIndex>
                    </SharpType>                        
                    <StyledTextField
                      id="standard-dense"
                      label="Type here..."                          
                      margin="dense"
                    />     
                    <StyledMultiTextField
                      id="standard-dense"
                      label="Type here..."                          
                      margin="dense"
                      multiline
                      rows={5}                          
                    />         
                    <StyledTextField
                      id="standard-dense"
                      label="Type here..."                          
                      margin="dense"
                    />                 
                  </MentorLeft>
                  <MentorRight>
                    <Icons>
                      <MentorIcon className="fa fa-trash-o inner-element bubble-element clickable-element"/>
                      <MentorIcon className="fa fa-info inner-element bubble-element clickable-element"/>                          
                    </Icons>
                    <AddMentor>
                      <MentorButton>Add Mentor</MentorButton>
                    </AddMentor>
                    <Submit>
                      <div>Missing CC!</div>                          
                      <SubButton>
                        Submit
                      </SubButton>
                    </Submit>
                  </MentorRight>
                </MentorCard>
              </Card>   
    );
  }
}

export default ButtonComponent;
