import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './list.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
class List extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data: [],

		}
	}
	render() {
		return (
			<div className="chaozhis">
				<h2 className="htwo">猜你喜欢</h2>
				<ul className="ad-containers" >
					{this.state.data.map((item, index) => {
						return <li key={index} className="ad-items">
							<Link to="/business">
							<a href={item.link} target="_blank">
								<img src={item.img} alt={item.title} />
							</a>
							<h1 className="name">{item.title}</h1>
							<span className="right">{item.distance}</span>
							<p className="introduce">{item.subTitle}</p>
							<h1 className="price">￥{item.price}</h1>
							<span className="right">已售{item.mumber}</span>
							</Link>
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

export default List