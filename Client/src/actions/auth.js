import { AUTH } from '../constants/actionTYpes';
import * as api from '../api/index.js';

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/Home');
  } catch (error) {
    console.log(error);
  }
};

export const signin = (formData, router) => async (dispatch) => {
  
  try {
    console.log("in sign inn")
    console.log("response of sign in")
    const { data } = await api.signIn(formData);
      
    
    console.log(data);
    dispatch({ type: AUTH, data });

    router.push({
      pathname: '/Home',
      state: { signed: 'signed' }
    })
    
  } catch (error) {
    console.log(error.response.data.message)
    console.log("error sign in");
    const temp = true;
    return temp;
  }

  
};