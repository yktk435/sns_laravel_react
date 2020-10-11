// src/containers/Ranking.js
import { connect } from 'react-redux';
import Home from '../components/centerarea/home/home'
import * as actions from '../actions/fetch'
import * as postAction from '../actions/post'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      ...state.getUserInfo,
      requestData: state.postInfo,
      text: state.postInfo.text,
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
    dispatch(postAction.inputPostText(text))
  },
  clearTextBox() {
    dispatch(postAction.clearTextBox())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
