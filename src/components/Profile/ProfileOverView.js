import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import styled from 'styled-components';
import { connect } from 'react-redux';

const ProfileCard = styled(CardContent)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
  grid-template-rows: 30px;
  height: 210px;
`;

const ProfileLeft = styled.div`
  display: grid;
  grid-template-columns: 90px 100px;
  grid-gap: 10px;
  grid-template-rows: 30px;
  height: 100%;
`;

const ProfileRight = styled.div`
  display: grid;
  grid-gap: 4px;
  grid-template-rows: 25px;
`;

const ProfileImage = styled.img`
  display: block;
  width: 90px;
  border-radius: 50%;
`;

const SubProfileImage = styled.img`
  display: block;
  width: 50px;
  margin: auto;
`;

const Image = styled.div`
  display: grid;
  grid-template-rows: 110px 60px;
  height: 100%;
`;

const Texts = styled.div`
  display: grid;
  grid-template-rows: 35px 20px 25px 25px 25px;
  gap: 10px;
  height: 100%;
`;

const Name = styled.div`
  box-sizing: border-box;
  height: 35px;
  width: 231.922px;
  overflow: visible;
  font-family: Lato;
  font-size: 31px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  line-height: 1;
`;

const Title = styled.div`
  box-sizing: border-box;
  height: 20px;
  width: 231.922px;
  overflow: visible;
  font-family: Lato;
  font-size: 17px;
  font-weight: bold;
  color: rgb(51, 51, 51);
  line-height: 1;
`;

const Email = styled.div`
  box-sizing: border-box;
  height: 25px;
  width: 231.922px;
  overflow: visible;
  font-family: Lato;
  font-size: 14px;
  color: rgb(112, 112, 112);
  line-height: 1.4;
  padding-top: 3.5px;
  word-break: break-word;
`;

const Icon = styled.button`
  box-sizing: border-box;
  height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  color: rgba(69, 75, 128, 0.7);
  font-size: 25px;
  border-radius: 4px;
`;

const Status = styled.div`
  box-sizing: border-box;
  height: 25px;
  width: 231.922px;
  overflow: visible;
  font-family: Lato;
  font-size: 14px;
  color: rgb(112, 112, 112);
  line-height: 1.4;
  padding-top: 3.5px;
`;

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

const Notes = styled.div`
  box-sizing: border-box;
  height: 25px;
  width: 411.418px;
  overflow: visible;
  font-family: Lato;
  font-size: 14px;
  color: rgb(112, 112, 112);
  line-height: 1.4;
  padding-top: 32px;
`;

export class ProfileOverViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentee: [],
    };
  }

  UNSAFE_componentWillReceiveProps({ profileInfo }) {
    if (profileInfo) {
      this.setState({ mentee: profileInfo });
    }
  }

  render() {
    return (
      <Card>
        <ProfileCard>
          <ProfileLeft>
            <Image>
              <ProfileImage
                alt="profile"
                src={
                  this.state.mentee.picture
                    ? this.state.mentee.picture.thumbnailUrl
                    : ''
                }
              />
              <SubProfileImage
                alt="profile"
                src={
                  this.state.mentee.company
                    ? this.state.mentee.company.logo
                      ? this.state.mentee.company.logo.thumbnailUrl
                      : ''
                    : ''
                }
              />
            </Image>
            <Texts>
              <Name>{this.state.mentee.firstName}</Name>
              <Title>
                {this.state.mentee.title} at {this.state.mentee.companyName}
              </Title>
              <Email>{this.state.mentee.email}</Email>
              <Icon className="fa fa-linkedin-square inner-element bubble-element clickable-element" />
              <Status>Status: {this.state.mentee.obStatus}</Status>
            </Texts>
          </ProfileLeft>
          <ProfileRight>
            <TextIndex>
              <strong>Team size: </strong>
              {this.state.mentee.engineeringTeamSize}
            </TextIndex>
            <TextIndex>
              <strong>Years of management experience: </strong>
              {this.state.mentee.yearsInManagementNb}
            </TextIndex>
            <TextIndex>
              <strong>Number of employees in the company: </strong>
              {this.state.mentee
                ? this.state.mentee.company
                  ? this.state.mentee.company.nbEmployees
                  : ''
                : ''}
            </TextIndex>
            <Notes>
              <strong>Notes: </strong>
            </Notes>
          </ProfileRight>
        </ProfileCard>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  profileInfo: state.Profile.profileInfo,
});

const mapDispatchToProps = {};

ProfileOverViewComponent.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileOverViewComponent);
