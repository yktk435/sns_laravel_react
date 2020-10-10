// src/containers/Ranking.js
import { connect } from 'react-redux';
import LeftArea from '../components/leftarera';
import * as actions from '../actions/windowSizeChange';

const mapStateToProps = (state, ownProps) => ({
    leftAreaWidth: state.windowSizeChange.leftAreaWidth.leftAreaWidth,
    classNameString: state.windowSizeChange.leftAreaWidth.classNameString,
    displayString:state.windowSizeChange.leftAreaWidth.displayString,
    
});

const mapDispatchToProps = dispatch => ({
  windowSizeChange (width) {
    dispatch(actions.windowSizeChange(width));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftArea);
