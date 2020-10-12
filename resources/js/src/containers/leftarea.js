// src/containers/Ranking.js
import { connect } from 'react-redux';
import LeftArea from '../components/leftarera';
import * as actions from '../actions/windowSizeChange';
import * as leftarea from '../actions/leftarea';

const mapStateToProps = (state, ownProps) => ({
    path:state.router.location.pathname.replace('/',''),
    leftAreaWidth: state.windowSizeChange.leftAreaWidth.leftAreaWidth,
    classNameString: state.windowSizeChange.leftAreaWidth.classNameString,
    displayString: state.windowSizeChange.leftAreaWidth.displayString,
    style:state.leftarea.style
});

const mapDispatchToProps = dispatch => ({
  windowSizeChange (width) {
    dispatch(actions.windowSizeChange(width));
    },
    clickMenuItem(e) {
        dispatch(leftarea.clickMenuItem(e))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftArea);
