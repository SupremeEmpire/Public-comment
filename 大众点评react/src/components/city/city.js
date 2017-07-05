import React from 'react'
import { Link } from 'react-router-dom'
// import PureRenderMixin from 'react-addons-pure-render-mixin'
import './city.css'
import Back from '../back/back'
import SearchInput from '../SearchInput'

import { connect } from 'react-redux';
import { update } from '../../store/action'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }

        this.clickHandle = this.clickHandle.bind(this)

    }
    render() {
        return (
            <div className="city">
                <div className="city-header">
                    <Back /><SearchInput className="" />
                </div>
                <div className="city-list-container">

                    <h3>热门城市</h3>
                    <div>{this.props.userinfo.cityName}</div>
                    <ul className="clear-fix">
                        <Link to="/home">
                            <li>
                                <span onClick={this.clickHandle('北京')}>北京</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('上海')}>上海</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('杭州')}>杭州</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('广州')}>广州</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('苏州')}>苏州</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('深圳')}>深圳</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('南京')}>南京</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('天津')}>天津</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('重庆')}>重庆</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('厦门')}>厦门</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('武汉')}>武汉</span>
                            </li>
                            <li>
                                <span onClick={this.clickHandle('西安')}>西安</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
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

export default connect(select)(City)