import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './new.css';
import Back from '../back/back'
// 创建一个组件
class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"我是新闻"
        }
        // 改变this指向
    }
    render() {
        return (
            <div>
                <Back msg={this.state.message}/>
                
            </div>
        )
    }
}

export default New;