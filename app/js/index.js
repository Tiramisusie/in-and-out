var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./components/header/Header');
import Daily from './components/daily/Daily'
import Summary from './components/summary/Summary'

import { Row, Col, Button } from 'antd'

import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'


var App = React.createClass({
    render(){
        return (
            <div>
                <Header />
                <Row>
                    <Col span="4">
                        <nav className="nav-bar">
                            <ul role="nav">
                                <li><Link to="/daily">记一笔</Link></li>
                                <li><Link to="/summary">统计</Link></li>
                            </ul>
                        </nav>
                    </Col>
                    {this.props.children}
                </Row>
            </div>
        )
    }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Daily} />
            <Route path="/daily" component={Daily} />
            <Route path="/summary" component={Summary} />
        </Route>
    </Router>,
    document.getElementById('app')
);