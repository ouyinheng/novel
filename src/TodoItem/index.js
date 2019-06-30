import React, {Component, Fragment} from 'react'

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleclick = this.handleclick.bind(this);//节约性能
    }
    render() {
        return (
            <div onClick={this.handleclick}>{this.props.content}</div>
        )
    }
    handleclick() {
        const {index, deleteItem} = this.props;
        deleteItem(index);
    }
}