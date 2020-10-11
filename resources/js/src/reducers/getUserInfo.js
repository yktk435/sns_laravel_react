// src/reducers/Ranking.js



// 初期状態
const initialState = {
    userName: undefined,
    userId: undefined,
    userImageUrl: undefined,
    // errorオブジェクト格納用でresponseを用意
    response:undefined,
    error: false
};

export default (state = initialState, action) => {
    
    
    switch (action.type) {
        case 'GET_USERINFO':
            return action.payload.error
                ? { ...state, error: true }
                : {
                    ...state,
                    ...action.payload
                };

        default:
            return state;
    }
}
