// src/actions/Ranking.js
import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';


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
