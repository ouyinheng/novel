import React from 'react';
import './life.less'
import { version, Button } from "antd";
import Header from '../header'
export default class Life extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  handleClick() {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return <div className="i">
      <Header></Header>
      <p>React 生命周期介绍</p>
      <Button onClick={this.handleAdd}>click</Button>
      <Button onClick={this.handleClick.bind(this)}>click</Button>
      <p>{this.state.count}</p>
    </div>
  }
}