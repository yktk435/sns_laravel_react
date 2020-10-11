// dataはオブジェクトを想定
const receiveData = (data,error) => {
    return {
        type: 'GET_USERINFO',
        payload: {
            ...data,
            error,
        }

    }
}
export const getUserInfo = () => {
    // getState関数でstate.shopping.categoriesにアクセスする
    return async (dispatch, getState) => {
        
        // ログインしていなければloginにリダイレクトの処理を書く
        
        
        try {
            const responce = await fetch('http://localhost:8000/api/test');
            const data = await responce.json();
            dispatch(receiveData(data, null, )); 
        } catch (err) {
            // dispatch(receiveData(null, err)); 
        }
    };
};
