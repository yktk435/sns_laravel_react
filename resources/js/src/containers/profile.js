// src/containers/Ranking.js
import { connect } from 'react-redux';
import Profile from '../components/centerarea/profile/profile'
import * as actions from '../actions/fetch'
import * as profile from '../actions/profile'

const mapStateToProps = (state, ownProps) => {
    return (
        {
            userName: state.userInfo.userName,
            userId: state.userInfo.userId,
            iconUrl: state.userInfo.iconUrl,
            headerUrl: state.userInfo.headerUrl,
            accessToken: state.userInfo.accessToken,
            style: state.profile.style,
            // 投稿、返信、写真、グッドのどれを見ているか
            menuMode:state.profile.menuMode,
            // 投稿
            postObj: state.userInfo.postObj,
            // 返信
            // 写真
            picObj:state.profile.picObj,
            // ぐっと
            goodObj:state.profile.goodObj,
        }
    )
};
const mapDispatchToProps = dispatch => ({
    clickMenuItem(e) {
        dispatch(profile.clickMenuItem(e))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);