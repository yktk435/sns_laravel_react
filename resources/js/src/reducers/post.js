// 初期状態
const initialState = {
    text: '',
    response: undefined,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_POST_TEXT':
            return {
                text: action.payload.text
            };
        case 'CLEAR_TEXT':
            // 投稿ボタンを押したら文字を消す
            return {
                text: ''
            }
        default:
            return state;
    }
}
