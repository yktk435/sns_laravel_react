import React from 'react';
import { Link } from 'react-router-dom';

import EventListener from 'react-event-listener'

// 画像
import siteicon from '../images/siteicon.png'
import home from '../images/home.png'
import search from '../images/search.png'
import notification from '../images/notification.png'
import dm from '../images/dm.png'
import profile from '../images/profile.png'
import setting from '../images/setting.png'
import cathand2 from '../images/cathand2.png'

class LeftArea extends React.Component {
    render() {
        console.log("this.props", this.props)
        return (
            <header>
                <EventListener target="window" onResize={(e) => this.props.windowSizeChange(e.target.innerWidth)} />
                <div className="main left border" style={{ overflow: "auto", height: "100vh", width: this.props.leftAreaWidth }}>
                    <React.Fragment>
                        <div className="div-outside-image site-image">
                            <Link to="home"><a className="icon-link icon-to-center-for-a" href="" aria-label="サイトアイコン">
                                <img className="image-icon icon-to-center-for-img site-image-icon" src={siteicon} alt="サイトアイコン" />
                            </a></Link>
                        </div>
                        <div>
                            
                            
                            <IconParts displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="home" to="home" alt="ホームアイコン" innerstr="ホーム" image={home} />
                            <IconParts displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="search" to="search" alt="検索アイコン" innerstr="検索" image={search} />
                            <IconParts displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="notification" to="notification" alt="通知アイコン" innerstr="通知" image={notification} />
                            <IconParts displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="dm" to="dm" alt="メッセージアイコン" innerstr="メッセージ" image={dm} />
                            <IconParts displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="profile" to="profile" alt="プロフィールアイコン" innerstr="プロフィール" image={profile} />
                            <IconParts displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="setting" to="setting" alt="設定アイコン" innerstr="設定" image={setting} />
                            <div class="div-outside-image icon-container" style={{ width: "70%", marginBottom: "140px" }}>
                                <a class="a-to-block post-icon" href="" style={{ borderRadius: "100px", position: "relative" }}>
                                    <div class="block-to-center">
                                        <img class="image-icon" src={cathand2} alt="投稿開始ボタン" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </React.Fragment>
                </div>
            </header>
        )
    }

}
const IconParts = (props) => {
    console.log('000000000000000000000000000000000000000')
    console.log(props)
    return (
        <div className={props.classNameString}>
            <Link to={props.to}><a className="spreaded-icon-a" style={{ height: "36px" }}>
                <React.Fragment>
                    <div style={{ float: "left" }}>
                        <img className="img-size" src={props.image} alt={props.alt} />
                    </div>
                    <div className="icon-discription spreaded-icon-name" style={{display:props.displayString}}>{props.innerstr}</div>
                </React.Fragment>
            </a></Link>

        </div>
    )
}

export default LeftArea;