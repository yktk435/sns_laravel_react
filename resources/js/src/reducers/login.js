// 初期状態
const initialState = {
    // categoryId: undefined,
    // categoryIdからcategoryに変更
    userName: '',
    pass: '',
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        // リクエスト開始時に状態をリセット
        case 'INPUT_USERNAME':
            return {
                ...state,
                userName: action.payload.userName,                
            };

        case 'INPUT_PASS':
            return {
                ...state,
                pass: action.payload.pass,                
            }
        case 'PUSH_LOGIN_BUTTON':
            return state

        default:
            return state;
    }
}
