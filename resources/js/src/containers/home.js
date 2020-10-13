// src/containers/Ranking.js
import { connect } from 'react-redux';
import Home from '../components/centerarea/home/home'
import * as actions from '../actions/fetch'
import * as home from '../actions/home'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userName: state.userInfo.user.userName,
      userId: state.userInfo.user.userId,
      iconUrl: state.userInfo.user.iconUrl,
      headerUrl: state.userInfo.user.headerUrl,
      accessToken: state.userInfo.user.accessToken,
      error: false,
      requestData: {text:state.home.text},
      text: state.home.text,
    }
  )
};
const mapDispatchToProps = dispatch => ({

  post(requestData,token) {
    dispatch(actions.post(requestData,token));
  },
  inputPostText(text) {
    dispatch(home.inputPostText(text))
  },
  clearTextBox() {
    dispatch(home.clearTextBox())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
