import React, { Component } from 'react'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { Link } from 'react-router-dom'
import './business.css';
import Back from '../back/back'
import axios from 'axios'
// 创建一个组件
class Business extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "商户详情"
		}
		// 改变this指向
	}
	render() {
		return (
			<div className="chaozhis">
				<Back msg={this.state.message} />

				<ul className="ad-containers" to="/business">
					{this.state.data.map((item, index) => {
						return <li key={index} className="ad-items">
							<a href={item.link} target="_blank">
								<img src={item.img} alt={item.title} />
							</a>
							<h1 className="name">{item.title}</h1>
							<span className="right">{item.distance}</span>
							<p className="introduce">{item.subTitle}</p>
							<h1 className="price">￥{item.price}</h1>
							<span className="right">已售{item.mumber}</span>
						</li>
					})}
				</ul>
			</div>
		)
	}
	componentDidMount() {

		axios.get("http://localhost:3003/api/homelist/:city/:page")
			.then((res) => {
				console.log(res.data)
				this.setState({
					data: res.data.data
				})
			})
	}
}

export default Business;