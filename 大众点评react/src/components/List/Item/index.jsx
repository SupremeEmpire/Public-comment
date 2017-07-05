import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

import styles from './style.css'

class Item extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.data;
		return (
				<div className='list-item'>
					<Link to={'/detail/'+data.id}>
						<div className='item-img-container' style={{float:"left"}}>
							<img src={data.img} alt={data.title}/>
						</div>
						<div className='item-content'>
							<div className='item-title-container'>
								<h3 className="float-left">{data.title}</h3>
								<span className="float-right">{data.distance}</span>
							</div>
							<p className='item-sub-title'>
								{data.subTitle}
							</p>
							<div className='item-price-container'>
								<span className='price' style={{float:"left"}}>￥{data.price}</span>
								<span className='number'style={{float:"right"}}>已售{data.number}</span>
							</div>
						</div>
					</Link>
				</div>
			)
	}
}

export default Item