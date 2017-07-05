import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import './back.css'

class Header extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.clickHandle = this.clickHandle.bind(this)
	}

	render() {
		return (
			<div classID="common-header" style={{ textAlign: "center" }}>
				<span className="back-icon" onClick={this.clickHandle}>
					<Icon className="iconleft" type="left" />
				</span>
				<span className="title" style={{ fontSize: "1.2rem", lineHeight: "46px", color: "white" }}>{this.props.msg}</span>
			</div>
		)
	}
	clickHandle() {
		window.history.back()
	}
	componentDidMount() {
		console.log(this.props.setState)
	}
}


export default Header