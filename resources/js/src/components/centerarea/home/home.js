import React from 'react'
// import { Link } from 'react-router-dom';
// 画像
import pic from '../../images/pic.png'

import userImageUrl from '../../images/user.jpg'


class Home extends React.Component {
    render() {
        
        
        let PostedUserInfo = {
            userName: this.props.userName,
            userImageUrl: "./src/work/image/user.jpg",
            userId: this.props.userId,
            createdAt: "202x年x月x日",
            postImageUrl: "./src/work/image/user.jpg",

        }
        let request = {
            method: "post",
            body: {
                test: "test"
            }
        }
        return (
            <div className="main-container" style={{ overflow: "auto" }}>

                {/* メニュー特有のなにか */}
                <div style={{ borderBottom: "8px solid rgb(48, 60, 67)", height: "auto", padding: "10px" }} className="post-screen">

                    <div style={{ float: "left" }} aria-label="ユーザアイコン">
                        <div style={{ margin: "5px" }}>
                            <a className="" href="" aria-label="ユーザアイコン">
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={this.props.iconUrl} alt="ユーザアイコン" />
                            </a>
                        </div>
                    </div>
                    <div onFocus={(e) => this.props.inputPostText(e.target.innerText)} onBlur={(e) => this.props.inputPostText(e.target.innerText)} className="text-area" contentEditable="true" >{this.props.text}</div>
                    
                    <div style={{ display: "flex", marginTop: "15px", marginBottom: "5px" }}>
                        <div style={{ display: "flex", marginLeft: "auto" }}>
                            <a style={{ margin: "0 5px" }} className="icon-link simple-icon" href="" aria-label="写真追加">
                                <img className="image-icon" src={pic} alt="写真追加アイコン" />
                            </a>
                            <a onClick={() => {
                                
                                this.props.post(this.props.requestData,this.props.accessToken)
                                this.props.clearTextBox()
                            }} style={{ margin: "0 5px", }} className="btn btn--orange btn--radius" aria-label="投稿ボタン">投稿</a>
                        </div>
                    </div>

                </div>
                {/* みんなの投稿 */}
                <div>
                    <OtherPost {...PostedUserInfo} />
                    <OtherPost {...PostedUserInfo} />
                    <OtherPost {...PostedUserInfo} />
                </div>
            </div >
        )
    }

}
const OtherPost = (props) => {

    return (
        <div style={{ padding: "10px 15px", borderBottom: "1px solid rgb(48, 60, 67)", display: "inline-flex", height: "auto", width: "560px" }} className="post-screen">
            <React.Fragment>
                {/* ブロック1 */}
                <div style={{ marginRight: "10px" }} aria-label="ユーザアイコン">
                    <div style={{ margin: "5px" }}>
                        <a className="" href="" aria-label="ユーザアイコン">
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={userImageUrl} alt="ユーザアイコン" />
                        </a>
                    </div>
                </div>
                {/* ブロック2 */}
                <div style={{ display: "block" }}>

                    {/* <!-- ユーザ名 --> */}
                    <div>
                        <div style={{ float: "left", marginLeft: "5px" }}>
                            <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{props.userName}</a>
                        </div>
                        <div style={{ float: "left", margin: "0 15px" }}>
                            <a style={{ textDecoration: "none", color: " rgb(115, 129, 136)" }} href="">@{props.userId}</a>
                        </div>
                        <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>{props.createdAt}</div>
                    </div>
                    {/* <!-- 投稿内容 --> */}
                    <div>

                        <div className="font" style={{ padding: "5px 0", paddingRight: "50px" }} aria-label="投稿した文字を表示">投稿文字ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</div>
                        {(() => {
                            // 写真があれば表示
                            if (1) {
                                return (
                                    <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                                        <a href="" >
                                            <img src={userImageUrl} alt="投稿した写真を表示" style={{ width: "90%", borderRadius: "5%" }} />
                                        </a>
                                    </div>
                                )
                            }
                        })()}


                    </div>

                </div>
            </React.Fragment>
        </div>

    )
}

export default Home