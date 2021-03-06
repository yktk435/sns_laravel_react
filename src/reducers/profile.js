let filter = {
    WebkitFilter: "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
}
// 初期状態
const initialState = {
    style: [filter, {}, {}, {},],
    menuMode:'post',
    response: undefined,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_MENU_ITEM':
            return {
                style: { ...action.payload.style },
                menuMode:action.payload.menuMode,
            };
        
        default:
            return state;
    }
}
