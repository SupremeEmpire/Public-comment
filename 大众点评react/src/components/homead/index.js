import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import Ad from '../data/subpage/Ad'
import './style.css'
import axios from 'axios'

class HomeAd extends Component {
	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			data: [],
		}
	}

	render() {
		return (
			<div className="chaozhi">
				<h2>超值特惠</h2>
				<ul className="ad-container">
					{this.state.data.map((item, index) => {
						return <li key={index} className="ad-item">
							<a href={item.link} target="_blank">
								<img src={item.img} alt={item.title} />
							</a>
						</li>
					})}
				</ul>
			</div>
		)
	}
	componentDidMount() {
		axios.get("http://localhost:3003/api/homead")
			.then((res) => {
				console.log(res.data)
				this.setState({
					data: res.data

				})
			})

	}
}


export default HomeAd