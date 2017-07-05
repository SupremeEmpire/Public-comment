import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './user.css';
import Back from '../back/back'
import { Link } from 'react-router-dom'
// 创建一个组件
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "用户界面"
        }
        // 改变this指向
    }
    render() {
        return (
            <div>
                <Back msg={this.state.message} />
                <div className="userup">
                    <div className="touxiang">
                        我是头像
                    </div>
                    <div className="login">
                        账户:  &#x3000;<input type="text" value=''  placeholder="请输入账号" />
                    </div>
                    <div className="key">
                        密码:  &#x3000;<input type="text" value='' placeholder="请输入密码" />
                    </div>
                    <Link to="/home">
                    <button >登录</button><button>注册</button>
                    </Link>
                </div>
            </div>
        )
    }
    
}

export default User;