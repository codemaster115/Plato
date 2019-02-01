import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  Drawer,
  Hidden,
  Typography,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Avatar,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

import navInfor from '../assets/staticInfo/NavInfo';
import BackNav from '../components/BackNav';

import { logout } from '../ducks/login';
import { ShowAllRequest, ShowRequestToMatch } from '../ducks/request';

const Header = styled(AppBar)`
  background-color: rgb(230, 235, 241) !important;
  box-shadow: none !important;
  color: black !important;
  margin-left: 240px;
`;

const ProfileHeader = styled(AppBar)`
  width: 100px !important;
  left: 0 !important;
  margin-left: 0px;
  background-color: rgb(230, 235, 241) !important;
  box-shadow: none !important;
  color: black !important;
`;

const StyledIconButton = styled(IconButton)`
  margin-right: 20;
  @media (min-width: 1280px) {
    display: none;
  }
`;

const BugIcon = styled.button`
  position: relative;
  box-sizing: border-box;
  height: 20px;
  width: 15.1042px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  color: rgb(66, 71, 112);
  font-size: 15.1042px;
  border-radius: 4px;
  float: right;
  margin-left: 10px;
`;

const Accountdata = styled.div`
  position: relative;
  background-color: rgb(230, 235, 241) !important;
  box-shadow: none !important;
  float: right;
  margin-left: 10px;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const AccountIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 20px;
  width: 22.6554px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  color: rgb(66, 71, 112);
  font-size: 20px;
  border-radius: 4px;
  float: right;
  margin-left: 10px;
`;

const AccountStatusContainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: 20px;
  text-align: center;
  background: none;
  border: none;
  color: rgb(66, 71, 112);
  font-size: 20px;
  border-radius: 4px;
  width: 250px;
  right: 30px;
`;

const Nav = styled.nav`
  width: 240px;
  flex-shrink: 0;
  
  @media (max-width: 1280px) {
    width: auto;
  }
`;

const StyledExpansionPanel = styled(ExpansionPanel)`
  background-color: rgb(230, 235, 241) !important;
`;

const StyledDrawer = styled.div`
  overflow: hidden;
`;

const NavAvatar = styled(Avatar)`
  width: 25px !important;
  height: auto !important;
  border-radius: 0px !important;
`;

const NavItemTitle = styled(Typography)`
  margin: 4px 20px 0px !important;
  font-size: 15px !important;
  font-weight: bold !important;
  color: rgb(66, 71, 112) !important;
`;

const NavSubItemTitle = styled.div`
  font-family: Lato !important;
  color: rgb(112, 112, 112) !important;
  line-height: 1.4 !important;
  font-size: 15px !important;
  font-weight: bold !important;
  flex: 1 0 100%;
  margin: 3px 60px;
  cursor: pointer;
  &:hover {
    color: rgb(83, 118, 223) !important;
  }
`;

const StyledExpansionPanelDetails = styled(ExpansionPanelDetails)`
  flex-wrap: wrap;
  padding: 8px !important;
  margin-top: -15px;
`;

const LogoutLink = styled.div`
  font-family: 'Source Sans Pro';
  font-size: 15px;
  font-weight: 400;
  color: rgb(66, 71, 112);
  line-height: 1.4;
  text-align: center;
  margin-top: 70px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: rgb(214, 55, 30) !important;
  }
`;

const LogoutIcon = styled.button`
  box-sizing: border-box;
  z-index: 2;
  height: 27px;
  left: 0px;
  text-align: center;
  cursor: inherit;
  background: none;
  border: none;
  color: rgb(69, 75, 128);
  margin-top: -2px;
  font-size: 25px;
  box-shadow: none;
  &:hover {
    color: rgb(214, 55, 30) !important;
  }
`;

const LoginLabel = styled.p`
  float: right;
  margin: 4px 6px;
  font-size: 15px;
`;

const StyledAvatar = styled(Avatar)`
  margin: 30px;
  width: 160px !important;
  height: auto !important;
  overflow: visible !important;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      expanded: '',
    };
  }

  handleChange = panel => (event, isExpanded) => {
    isExpanded
      ? this.setState({ expanded: panel })
      : this.setState({ expanded: false });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  onItemChange = item => {
    if (item.route) {
      this.props[item.subItems[0].action]();
      this.props.push(item.route);
    }
  };

  onSubItemChange = subItem => {
    if (subItem.action) {
      this.props[subItem.action](true);
    }
  };

  onLogOut = () => {
    this.props.logout();
    this.props.push('./login');
  };
  render() {
    const drawer = (
      <StyledDrawer>
        <StyledAvatar
          alt="logo"
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1521686436689x671059151878580500%2FArtboard%25203.png?w=256&h=78&auto=compress&fit=crop"
        />
        {this.props.path === '/profile' ? (
          <BackNav />
        ) : (
          <div>
            {navInfor.navItems.map((items, i) => {
              let panel = 'panel' + i;
              return (
                <StyledExpansionPanel
                  expanded={this.state.expanded === panel}
                  onChange={this.handleChange(panel)}
                  key={i}
                >
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    onClick={() => {
                      this.onItemChange(items);
                    }}
                  >
                    <NavAvatar alt={items.title} src={items.imgSrc} />
                    <NavItemTitle>{items.title}</NavItemTitle>
                  </ExpansionPanelSummary>
                  <StyledExpansionPanelDetails>
                    {items.subItems.map((subItem, idx) => {
                      return (
                        <NavSubItemTitle
                          button
                          onClick={() => {
                            this.onSubItemChange(subItem);
                          }}
                          key={idx}
                        >
                          {subItem.title}
                        </NavSubItemTitle>
                      );
                    })}
                  </StyledExpansionPanelDetails>
                </StyledExpansionPanel>
              );
            })}
            <LogoutLink>
              <LogoutIcon
                className="ion-ios-redo inner-element bubble-element"
                onClick={() => {
                  this.onLogOut();
                }}
              >
                <LoginLabel>Log out</LoginLabel>
              </LogoutIcon>
            </LogoutLink>
          </div>
        )}
      </StyledDrawer>
    );
    return (
      <div>
        {this.props.path === '/profile' ? (
          <ProfileHeader>
            <Toolbar>
              <StyledIconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </StyledIconButton>
            </Toolbar>
          </ProfileHeader>
        ) : (
          <Header position="fixed">
            <Toolbar>
              <StyledIconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
              >
                <MenuIcon />
              </StyledIconButton>
              <AccountStatusContainer>
                <BugIcon className="fa fa-bug inner-element bubble-element clickable-element" />
                <Accountdata>{this.props.username}</Accountdata>
                <AccountIcon className="fa fa-user-circle-o inner-element bubble-element" />
              </AccountStatusContainer>
            </Toolbar>
          </Header>
        )}
        <Nav>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: 'drawer',
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden mdDown implementation="css">
            <Drawer
              classes={{
                paper: 'drawer',
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </Nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  username: state.Login.username,
});

const mapDispatchToProps = {
  logout,
  ShowAllRequest,
  ShowRequestToMatch,
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBarComponent);
