import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import axios from 'axios'
import HomeAd from '../../homead/index'
// import AdData from './ad/ad'
// import { getAdData } from '../fach/home'

class Ad extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data: []
		}
	}
	render() {
		return (
			<div>
				{
					this.state.data.length
						? <HomeAd data={this.state.data} />
						: <div>加载中...</div>
				}
			</div>
		)
	}
	
}

export default Ad