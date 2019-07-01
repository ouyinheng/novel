import React, { Component, Fragment } from 'react'
import TodoItem from '../TodoItem'
import axios from 'axios';
import { Input, Button, List  } from 'antd';
import store from '../store'
import { getInputChagenAction, getAddItemAction, getDeleteItemAction } from '../store/actionCreators';
export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.setValue = this.setValue.bind(this)
        this.submit = this.submit.bind(this)
        this.delHandle = this.delHandle.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        console.log(store.getState())
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <Fragment>
                <div style={{margin: '10px'}}>
                    <Input value={this.state.inputValue} onChange={this.setValue} style={{
                        width: "300px",
                        marginRight: '10px'
                    }}/>
                    <Button type="primary" onClick={this.submit}>submit</Button>
                </div>
                <List
                    style={{width: "300px",marginTop: '10px',marginLeft: '10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.delHandle.bind(this, index)}>{item}</List.Item>)}
                />
            </Fragment>
        )
    }

    submit() {
        const action = getAddItemAction()
        store.dispatch(action)
    }
    setValue(e) {
        const action = getInputChagenAction(e.target.value)
        store.dispatch(action)
    }
    delHandle(index) {
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
    handleStoreChange() {
        console.log('store change');
        this.setState(store.getState())
    }
    componentDidMount() {
        // axios.get('/api/todolist').then(res=>{
        //     console.log(res)
        // }).catch(err=>{
        //     console.log('err', err)
        // })
    }
}