// src/actions/Ranking.js
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import { replace } from 'react-router-redux'; 


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
  type: 'GET_PTHER_USERINFO',
  payload: { response, error },
});


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
          dispatch(getUserInfoAction(data, null, )); 
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
          dispatch(getOtherUserInfoAction(data, null, )); 
      } catch (err) {
          // dispatch(receiveData(null, err)); 
      }
  };
};
