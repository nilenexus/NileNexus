import {AUTH,LOGOUT} from '../constants/actionTYpes';
import * as actionType from '../constants/actionTYpes'
const authReducer = (state={authData:null}, action) => {
    switch (action.type) {
      case actionType.AUTH:
        localStorage.setItem('profile', JSON.stringify({ ...action.data }));

        return { ...state, authData: action.data, loading: false, errors: null };
      default:
          return state;
    }
  };
  
  export default authReducer;