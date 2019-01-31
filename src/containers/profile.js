import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ProfileOverView from '../components/Profile/ProfileOverView';
import BriefCard from '../components/Profile/BriefCard';

const ProfileContent = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export class ProfileLayoutContainer extends React.Component {
  render() {
    return (
      <ProfileContent>
        <ProfileOverView />
        <BriefCard />
      </ProfileContent>
    );
  }
}

ProfileLayoutContainer.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileLayoutContainer);
