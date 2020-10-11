// src/App.js
import React, { Component } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Ranking from './containers/Ranking';
import LeftArea from './containers/leftarea'
import RightArea from './containers/rightarea'
// containerにするとルーティングできなくなる
import CenterArea from './containers/centerarea'
import Login from './containers/login'
// import CenterArea from './components/centerarea'
import './index.css'
class App extends Component {
  componentWillMount() {

    this.props.getUserInfo()
  }

  render() {
    this.comp=(
      <div>
        {/* アイコン系(左側) */}
        <LeftArea />
        {/* タイムライン系(真ん中) */}
        <CenterArea />
        {/* 右側 */}
        <RightArea />
      </div>
    )
    // 認証していなかったら
    if(0)this.comp=<Login/>
    return this.comp
  };
}


export default App;
