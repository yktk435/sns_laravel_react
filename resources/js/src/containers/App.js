// src/containers/Ranking.js
import { connect } from 'react-redux';
import App from '../App';
import * as actions from '../actions/getUserInfo';

const mapStateToProps = (state, ownProps) => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    getUserInfo () {
    dispatch(actions.getUserInfo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
