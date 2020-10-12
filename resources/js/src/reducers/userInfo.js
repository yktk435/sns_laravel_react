const initialState = {
    user: {
        userName: undefined,
        userId: undefined,
        iconUrl: undefined,
        headerUrl: undefined,
        accessToken: undefined,
        response: undefined,
        error: false
    },
    otherUser: {
        userName: undefined,
        userId: undefined,
        iconUrl: undefined,
        headerUrl: undefined,
        accessToken: undefined,
        response: undefined,
        error: false
    }

};


export default (state = initialState, action) => {


    switch (action.type) {
        case 'GET_USERINFO':
            return action.payload.error
                ? { user: { ...state, error: true } }
                : {
                    // 通信エラーエラーがないなら
                    // API側のキーにの撮ってすべて展開
                    ...state,
                    user: {
                        ...action.payload.response,
                        error: false,
                    },
                };
            break;
        case 'GET_OTHER_USERINFO':
            return action.payload.error
                ? { otherUser: { ...state, error: true } }
                : {
                    // 通信エラーエラーがないなら
                    // API側のキーにの撮ってすべて展開
                    ...state,
                    otherUser: {
                        ...action.payload.response,
                        error: false,
                    },
                };
            break;
        default:
            return state;
    }
}
