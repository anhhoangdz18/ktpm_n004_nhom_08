import axios from "axios"
import { json } from "react-router-dom";

const login = (input) => async (dispatch) => {
  let user = JSON.stringify(input)
  console.log(user);
  try {
    dispatch({
      type: 'login_pending'
    })
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }
    console.log('111');
    const { data } = await axios.post(process.env.REACT_APP_API_URL + '/users/login', user, config)
            
    console.log(data)
    
    dispatch({
      type: 'login_success',
      payload: data.data,
    })
    localStorage.setItem('user', JSON.stringify(data.data))

  } catch (e) {
    console.log(e);
    dispatch({
      type: 'login_error',
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}

export { login }