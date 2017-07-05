import React, { Component } from 'react'
// 组件性能优化
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router-dom'
import SearchInput from '../SearchInput'
import Categorys from '../Category'
import './home.css';
import { Icon } from 'antd';
import 'antd/dist/antd.css';
import Homes from '../homead'
import List from '../homeads/List'

import { connect } from 'react-redux';
import { update } from '../../store/action'

// 创建一个组件
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
		// 改变this指向
	}
	render() {
		return (
			<div className="home">
				<div className="home-header">
					<div className="header-left " style={{ display: 'block' }}>
						<Link to="/city">
							<span>{this.props.userinfo.cityName}</span>
							<Icon className="downicon" type="down" />
						</Link>
					</div>
					<SearchInput />
					<div className="header-right" >
						<Link to="/user">
							<Icon className="usericon" type="user" />
						</Link>
					</div>

				</div>
				<Categorys />
				<div className="division"></div>
				<Homes />
				{/*<HomeAd />*/}
				<List />
			</div>

		)
	}
	enterHandle(value) {
		this.props.history.push('/search/all/' + encodeURIComponent(value));
	}
	clickHandle(cityName) {
		var obj = {
			cityName: cityName
		}
		return () => {
			this.props.dispatch(update(obj))
		}
	}
}

function select(state) {
	return {
		userinfo: state.userinfo
	}
}

export default connect(select)(Home);