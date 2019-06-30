import React,{Component} from 'react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
// 登录
import App from './App';
import Todolist from './TodoList'
export default class Routers extends Component {
    
    render(){
        return (
            <BrowserRouter>
                <div style={{width:"100%",height:"calc(100vh)"}}>
                    <Switch>
                        <Route exact={true} path="/" component={App}/>
                        <Route exact={true} path="/todolist" component={Todolist}/>
                    </Switch>
                </div>
            </BrowserRouter >
        )
    }
} 