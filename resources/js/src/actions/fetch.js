// src/actions/Ranking.js
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import { replace } from 'react-router-redux';
import login from '../containers/login';


const API_URL = 'http://localhost:8000/api/test';
const APP_ID = 'dj00aiZpPVBVWWZrNG9iN1dEciZzPWNvbnN1bWVyc2VjcmV0Jng9ODk-';

// categoryをpayloadに含むように修正
const startRequest = response => ({
  type: 'START_REQUEST_F',
  payload: { response },
});
const receiveData = (response, error) => ({
  type: 'RECEIVE_DATA_F',
  payload: { response, error },
});
const finishRequest = response => ({
  type: 'FINISH_REQUEST_F',
  payload: { response },
});

const getUserInfoAction = (response, error) => ({
  type: 'GET_USERINFO',
  payload: { response, error },
});

const getOtherUserInfoAction = (response, error) => ({
  type: 'GET_OTHER_USERINFO',
  payload: { response, error },
});
const loginError = (errorObj,error) => ({
  type: 'LOGIN_ERROR',
  payload: { errorObj, error },
})
const loginErrorWithToken = (errorObj,error) => ({
  type: 'LOGIN_ERROR_EITH_TOKEN',
  payload: { errorObj, error },
})
const logoutAction = () => ({
  type: 'LOGOUT',
  
})
export const post = (requestData) => {
  console.log('JJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ')
  console.log(requestData)
  return async (dispatch, getState) => {
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const response = await fetch(API_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'applicaxtion/json',
          // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
        },
        body: JSON.stringify(requestData)
      });
      const data = await response.json();
      console.log('===================================================')
      console.log("res", response)
      console.log("data", data)
      dispatch(receiveData(data, null));
    } catch (err) {
      dispatch(receiveData(err));
    }
  };
};


export const getUserInfo = () => {
  // getState関数でstate.shopping.categoriesにアクセスする
  return async (dispatch, getState) => {

    // ログインしていなければloginにリダイレクトの処理を書く
    // クッキーを見てアクセストークンがなかったらログイン画面にリダイレクト
    // if (クッキーがなかったら) {
    //   dispatch(replace('/login'));
    //   return;
    // }

    try {
      const responce = await fetch('http://localhost:8000/api/test');
      const data = await responce.json();
      dispatch(getUserInfoAction(data, null,));
    } catch (err) {
      // dispatch(receiveData(null, err)); 
    }
  };
};

export const getOtherUserInfo = () => {
  // getState関数でstate.shopping.categoriesにアクセスする
  return async (dispatch, getState) => {

    // ログインしていなければloginにリダイレクトの処理を書く

    try {
      const responce = await fetch('http://localhost:8000/api/test');
      const data = await responce.json();
      dispatch(getOtherUserInfoAction(data, null,));
    } catch (err) {
      // dispatch(loginError(err)); 
    }
  };
};


export const startLogin = (ipassData) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'post',
      headers: {
        'Content-Type': 'applicaxtion/json',
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify(ipassData)
    }

    // ログインしていなければloginにリダイレクトの処理を書く
    try {
      const responce = await fetch('http://localhost:8000/api/login', option);
      const data = await responce.json();
      console.log(await data)

      if('error' in data)throw data
      dispatch(replace('/home'))
      dispatch(getUserInfoAction(data, null,));
      document.cookie='access_token='+data.accessToken
      
    } catch (err) {
      console.log('error  error  error  error  error  error  error')
      console.log(err)
      dispatch(loginError(err));
      dispatch(replace('/login'))
      
    }
  };
}
// アクセストークンを持っているならそれでログイン
export const startLoginWithToken = (token) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token':token,
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',

      },
    }

    // ログインしていなければloginにリダイレクトの処理を書く
    try {
      
      const responce = await fetch('http://localhost:8000/api/login', option);
      const data = await responce.json();
      
      if('error' in data)throw data
      dispatch(replace('/home'))
      dispatch(getUserInfoAction(data, null,));
      document.cookie='access_token='+data.accessToken
      
    } catch (err) {
      dispatch(loginErrorWithToken(err));
      dispatch(replace('/login'))
      
    }
  };
}

export const logout = () => {
  return (dispatch, getState) => { 
    document.cookie='access_token=;'
    dispatch(logoutAction())
    dispatch(replace('/login'))
  }
}