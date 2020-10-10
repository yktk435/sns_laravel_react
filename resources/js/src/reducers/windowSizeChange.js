let width = window.innerWidth

let leftAreaWidth = {
    leftAreaWidth: '',
    classNameString: 'if-spreaded',
    displayString:'block'
}
let rightAreaWidth = {
    rightAreaWidth: '',
    display:'block'
}
if (1270 <= width) { //3分割 すべて展開

    console.log('すべて展開')
    rightAreaWidth.rightAreaWidth = "350px"
    rightAreaWidth.display = 'block'
    leftAreaWidth.leftAreaWidth = "250px"
    // すべて展開してたときのアイコンの位置調整
    if (leftAreaWidth.classNameString.match(/outer/)) {
        leftAreaWidth.classNameString = leftAreaWidth.classNameString.replace('outer', 'if-spreaded')
    }
    // アイコンの説明を表示
    leftAreaWidth.displayString="block"

} else {
    // アイコンをもとに戻す
    if (leftAreaWidth.classNameString.match(/if-spreaded/)) {
        console.log('if-spreaded → outer')
        leftAreaWidth.classNameString = leftAreaWidth.classNameString.replace('if-spreaded', 'outer')
    }
    // アイコンの説明を非表示
    leftAreaWidth.displayString = "none"
    
    if (width < 950) { //それより小さい縦幅なら
        rightAreaWidth.display = 'none'
    } else if (950 <= width && width < 1000) { //2分割
        console.log('2分割')
        leftAreaWidth.leftAreaWidth = "70px"
        rightAreaWidth.display = 'none'
    } else if (1000 <= width && width < 1270) { //3分割
        console.log('3分割')
        leftAreaWidth.leftAreaWidth = "70px"
        rightAreaWidth.rightAreaWidth = "350px"
        rightAreaWidth.display = 'block'
    }
}

// 初期状態
const initialState = {
    leftAreaWidth,
    rightAreaWidth,
};
console.log(initialState)
export default (state = initialState, action) => {
    switch (action.type) {
        // リクエスト開始時に状態をリセット
        case 'WINDOW_SIZE_CHANGE':
            return {
                // categoryを状態に保持
                leftAreaWidth: action.payload.leftAreaWidth,
                rightAreaWidth: action.payload.rightAreaWidth,
            };

        default:
            return state;
    }
}
