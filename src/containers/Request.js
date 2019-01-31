import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from '../components/SearchBar';
import RquestMatchTable from '../components/RequestMatchTable';

import { ShowRequestToMatch } from '../ducks/request';
const TableContainer = styled.div`
    width: 100%;    
`;

const RequestTabs = styled.div`
    display: grid;
    grid-template-columns: 120px 120px;
    grid-gap: 20px;    
    grid-template-rows: 30px;
`;

const RequestTab = styled.div`
    padding: 0px;
    cursor: pointer;
    background: none;
    border: none;
    text-align: center;    
    box-sizing: border-box;    
    height: 31px;    
    user-select: none;
    font-family: Lato;
    font-size: 14px;
    font-weight: bold;
    color: rgb(66, 71, 112);
    line-height: 1;
    border-radius: 3px;
    width: 106px;
    text-decoration: none;
    font-style: normal;
    padding: 20px 0px 5px;
    &:focus {
      color: rgb(138, 138, 138); !important;
    }
`;

class RequestContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onTabChange = (e) => {        
    this.props.ShowRequestToMatch(e);
  }

  render() {
    const ShowAll = (
      <div>
        All Requests page!
      </div>
    )
    const ShowMatch = (
      <div>
        <RequestTabs>
            <RequestTab 
             onClick={() => {this.onTabChange(true)}}
             >
              Onboarded
            </RequestTab>
            <RequestTab
            onClick={() => {this.onTabChange(false)}}
            >
              Not Onboarded
            </RequestTab>                    
        </RequestTabs>
        <RquestMatchTable />
      </div>
    )    
    return (
            <div>                
              <SearchBar />            
              <TableContainer>          
                {this.props.isShowAllRequest ? ShowAll: null}
                {this.props.isShowRequestMatch ? ShowMatch: null}
              </TableContainer>              
            </div>
    );
  }
}

RequestContainer.propTypes = {  
};

const mapStateToProps = state => (
  {
    isShowAllRequest: state.Request.isShowAllRequest,
    isShowRequestMatch: state.Request.isShowRequestMatch,    
  }
);

const mapDispatchToProps = {
  ShowRequestToMatch,
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestContainer);
