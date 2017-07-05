import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Icon } from 'antd';
import './index.css'

class SearchInput extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value: ''
		}
		this.changeHandle = this.changeHandle.bind(this)
		this.keyUpHandle = this.keyUpHandle.bind(this)
	}
	render() {
		return (
			<div className='search-container'>
				<Icon className="searchicon" type="search" />
				<input
					type="text"
					placeholder="请输入关键字"
					value={this.state.value}
					onChange={this.changeHandle}
					onKeyUp={this.keyUpHandle}
				/>
			</div>
		)
	}
	componentDidMount() {
		this.setState({
			value: this.props.value || ''
		})
	}
	changeHandle(e) {
		this.setState({
			value: e.target.value
		})
	}
	keyUpHandle(e) {
		if (e.keyCode !== 13) {
			return;
		}

		this.props.enterHandle(this.state.value);
	}
}

export default SearchInput;