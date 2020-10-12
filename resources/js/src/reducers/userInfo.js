const initialState = {
    userName: undefined,
    userId: undefined,
    iconUrl: undefined,
    headerUrl: undefined,
    accessToken: undefined,
    response: undefined,
    error: false
};


export default (state = initialState, action) => {


    switch (action.type) {
        case 'GET_USERINFO':
            return action.payload.error
                ? { ...state, error: true }
                : {
                    // 通信エラーエラーがないなら
                    // API側のキーにの撮ってすべて展開
                    ...action.payload.response,
                    error: false,
                    
                };

        default:
            return state;
    }
}
