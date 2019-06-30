import React, { Component, Fragment } from 'react'
import TodoItem from '../TodoItem'
import axios from 'axios';
import store from '../store'
export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this)
        this.submit = this.submit.bind(this)
        this.delHandle = this.delHandle.bind(this)
        console.log(store.getState())
        this.state = store.getState();
    }
    render() {
        return (
            <Fragment>
                <div><input value={this.state.inputValue} onChange={this.setValue}/> <button onClick={this.submit}>submit</button></div>
                <ul>
                   {
                      this.getTodoItem() 
                   }
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem key={index} content={item} index={index} deleteItem={this.delHandle}/>
            )
        })
    }
    submit() {
        this.setState( (prevState) => ({
            list:[...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
    setValue(e) {
        const value = e.target.value;
        this.setState(() => (
            {inputValue: value}
        ))
    }
    delHandle(index) {
        this.setState((prevState) => {
            let list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
    componentDidMount() {
        // axios.get('/api/todolist').then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log('err', err)
        // })
    }
}