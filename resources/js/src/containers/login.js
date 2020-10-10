// src/containers/Ranking.js
import { connect } from 'react-redux';
import Login from '../components/login';
import * as actions from '../actions/login';

const mapStateToProps = (state, ownProps) => ({
    userName: state.Login.userName,
    pass: state.Login.pass,
    error: state.Login.error
});

const mapDispatchToProps = dispatch => ({
    inputUserName(userName) {
        dispatch(actions.inputUserName(userName))
    },
    inputPass(pass) {
        dispatch(actions.inputPass(pass))
    },
    pushLoginButton(error) {
        dispatch(actions.pushLoginButton(error))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
