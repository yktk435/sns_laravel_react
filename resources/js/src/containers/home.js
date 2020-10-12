// src/containers/Ranking.js
import { connect } from 'react-redux';
import Home from '../components/centerarea/home/home'
import * as actions from '../actions/fetch'
import * as home from '../actions/home'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userName: state.userInfo.userName,
      userId: state.userInfo.userId,
      iconUrl: state.userInfo.iconUrl,
      headerUrl: state.userInfo.headerUrl,
      accessToken: state.userInfo.accessToken,
      error: false,
      requestData: {text:state.home.text},
      text: state.home.text,
    }
  )
};
const mapDispatchToProps = dispatch => ({

  post(requestData) {
    console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF')
    console.log(requestData)
    dispatch(actions.post(requestData));
  },
  inputPostText(text) {
    dispatch(home.inputPostText(text))
  },
  clearTextBox() {
    dispatch(home.clearTextBox())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
