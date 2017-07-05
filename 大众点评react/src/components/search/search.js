import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './search.css';
import Back from '../back/back'
import Listtwo from '../searchlist/Listtwo'
import LoadMore from '../LoadMore/index'
// 创建一个组件
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "发现更多",
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
        // 改变this指向
    }
    render() {
        // const data = this.props.data;
        return (
            <div>
                <Back msg={this.state.message} />
                <Listtwo />
                {
                    this.state.data.length
                    ? <div data={this.state.data}/>
                    : <div className="loading">加载中...</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        )
    }
}

export default Search;