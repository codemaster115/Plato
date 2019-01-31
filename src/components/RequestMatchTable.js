import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import RequestTableInfo from '../assets/staticInfo/RequestMatchTable';

import { getProfileInfo } from '../ducks/profile';

const Avartar = styled.img`
  width: auto;
  height: 30px;
  border-radius: 50%;
  float: left;
  display: block;
  margin-left: 40px;
`;

const OldBrief = styled.div`
  width: auto;
  height: 30px;
  border-radius: 50%;
  margin-left: 80px !important;
  display: block;
  padding-top: 7px;
  color: rgb(83, 118, 223) !important;
`;

const StyledTableHeaderCell = styled(TableCell)`
  text-align: center !important;
  padding: 4px 10px !important;
`;

const StyledTableCellOldBrief = styled(TableCell)`
  text-align: center !important;
  padding: 4px 100px !important;
`;

const StyledID = styled(TableCell)`
  padding: 18px !important;
  text-align: center !important;
  color: rgb(83, 118, 223) !important;
`;

const StyledHeadRow = styled(TableHead)`
  background-color: rgb(246, 249, 252) !important;
`;

const TableTop = styled.div`
  padding: 25px;
`;

const OptButton = styled.div`
  display: grid;
  grid-template-columns: 50px 50px;
  grid-gap: 10px;
  grid-template-rows: 30px;
  float: right;
  margin-top: -5px;
`;

const NewButton = styled.div`
  height: 35px;
  width: 65px;
  cursor: pointer;
  box-sizing: border-box;
  height: 30px;
  background-color: rgb(85, 90, 191);
  border-radius: 4px;
  box-shadow: rgb(238, 241, 244) 0px 2px 7px 0px;
  width: 65px;
`;

const Refresh = styled.button`
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  box-sizing: border-box;
  height: 27px;
  color: rgb(66, 71, 112);
  font-size: 27px;
  border-radius: 4px;
  width: 27px;
`;

const Plus = styled.button`
  text-align: center;
  cursor: inherit;
  background: none;
  border: none;
  box-sizing: border-box;
  height: 16.2px;
  color: rgb(245, 245, 245);
  margin-top: 5px;
  font-size: 15px;
  border-radius: 4px;
  width: 15px;
`;

const NewLabel = styled.p`
  color: rgb(245, 245, 245);
  margin-top: -15px;
  margin-left: 25px;
  font-size: 14px;
`;

const StyledTableRow = styled(TableRow)`
  cursor: pointer;
  &:hover {
    background-color: rgb(238, 241, 244);
  }
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  margin-top: 24px;
  overflow-x: auto;
`;

const StyledTable = styled(Table)`
  min-width: 700px;
`;

class RquestMatchTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Info: [],
    };
  }

  UNSAFE_componentWillReceiveProps({ requestInfo }) {
    this.setState({ Info: requestInfo });
  }

  onRowClick = id => {
    this.props.getProfileInfo(id);
    this.props.push('/profile');
  };
  render() {
    return (
      <StyledPaper>
        <TableTop>
          {this.state.Info.length} Mentees(s)
          <OptButton>
            <Refresh className="fa fa-refresh inner-element bubble-element clickable-element" />
            <NewButton className="bubble-element Group clickable-element">
              <Plus className="ion-android-add inner-element bubble-element" />
              <NewLabel>New</NewLabel>
            </NewButton>
          </OptButton>
        </TableTop>
        <StyledTable>
          <StyledHeadRow>
            <TableRow>
              {RequestTableInfo.header.map((header, i) => {
                return header === 'OLDEST BRIEF' ? (
                  <StyledTableCellOldBrief align="left" key={i}>
                    {header}
                  </StyledTableCellOldBrief>
                ) : (
                  <StyledTableHeaderCell key={i}>
                    {header}
                  </StyledTableHeaderCell>
                );
              })}
            </TableRow>
          </StyledHeadRow>
          <TableBody>
            {this.state.Info.map(row => (
              <StyledTableRow
                key={row.id}
                onClick={() => {
                  this.onRowClick(row.id);
                }}
              >
                <StyledID align="left">{row.id}</StyledID>
                <TableCell align="left">
                  <Avartar src={row.picture.thumbnailUrl} />
                  <OldBrief>{row.oldestBriefToMatchUpdatedAt}</OldBrief>
                </TableCell>
                <TableCell align="center">{row.fullName}</TableCell>
                <TableCell align="center">{row.operatorName}</TableCell>
                <TableCell align="center">{row.nbCallsScheduled}</TableCell>
                <TableCell align="center">
                  {row.nbCallsScheduledForOldestBrief}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledPaper>
    );
  }
}

const mapStateToProps = state => ({
  requestInfo: state.Request.requestInfo,
});

const mapDispatchToProps = {
  getProfileInfo,
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RquestMatchTable);
