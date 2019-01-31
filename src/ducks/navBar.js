/**

 * General COMMON State

 */

import { fromJS } from 'immutable';
import { createAction, handleActions } from 'redux-actions'

export const types = {
   NAVTOGGLE: 'NAVBAR/NAVBAR_NAVTOGGLE',   
 };

export const initialState = fromJS({
  mobileOpen: 'false',
 });

export const NavToggle = createAction(types.NAVTOGGLE);

export default handleActions({  
  [types.NAVTOGGLE]: (state, action) => {            
    return { ...state, mobileOpen: !action.payload};
    },
}, initialState);
