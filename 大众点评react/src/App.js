import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

// 导入自定义组件
import Home from './components/home/home'
import New from './components/new/new'
import Search from './components/search/search'
import User from './components/user/user'
import City from './components/city/city'
import Business from './components/Business/business'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="footer">
            <ul className="footerul">
              <li><Link to="/home">首页</Link></li>
              <li><Link to="/new">新闻</Link></li>
              <li><Link to="/search">发现</Link></li>
              <li><Link to="/user">我的</Link></li>
            </ul>
          </div>
         <Redirect to={{ pathname: '/home', state: { from: '/' } }}></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/new" component={New}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/city" component={City}></Route>
          <Route path="/business" component={Business}></Route>
          
          {/*带参数的路由*/}
          {/*<Route path="/detail/:id" component={Detail}></Route>*/}
        </div>
      </Router>
    );
  }
}

export default App;
