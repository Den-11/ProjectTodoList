import { AuthRequest, AuthRequestProps } from 'types/user';
import { setData } from './index';
import { TypedThunk } from '../../store';
import { baseUrl } from 'utils/constants'
import axios from 'axios'

export const authRequest = (props: AuthRequest): TypedThunk => async (dispatch) => {
  const { request, url, successCb } = props

  try {
    const { data: response } = await axios.post(baseUrl + url, request);

    if (response.status === 200) {
      dispatch(setData({ payload: response.record }));
      successCb()
    } else {
      alert(response.message);
    }
  } catch(e) {
    console.log('error in ', url, ' request: ', e)
  }
}

export const loginRequest = (props: AuthRequestProps): TypedThunk => (dispatch) => {
  const { data, successCb } = props
  dispatch(authRequest({
    request: data,
    url: 'signIn',
    successCb
  }))
}

export const registerRequest = (props: AuthRequestProps): TypedThunk => (dispatch) => {
  const { data, successCb } = props
  dispatch(authRequest({
    request: data,
    url: 'signUp',
    successCb
  }))
}
