import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import {searchBook, getBooKChapter} from './service/api.service'
import Loading from './components/Loading'

export default class App extends React.Component {
  
  state = {
    bookName: '',
    loading: false,
    bookList: []
  }
  searchBook = () => {
    this.setState({
      loading: true
    })
    searchBook(this.state.bookName).then(res => {
      this.setState({
        loading: false,
        bookList: res.data
      })
    })
  }
  changeValue = (e) => {
    this.setState({
      bookName: e.target.value
    })
  }
  ShowLoading = () => {
    if(this.state.loading) {
      return (<Loading></Loading>)
    } else {
      return (<div></div>)
    }
  }
  toDetails = (href) => {
    getBooKChapter(href).then(res => {
      console.log(res)
    })
  }
  renderList = () => {
    return this.state.bookList.map((item, index) => <li onClick={() => {this.toDetails(item.href)}} key={index}>{item.title}</li>)
  }
  render() {
    return <div className="App">
      <header className="App-header">
        <input className="search-input" onKeyPress={this.searchBook} value={this.state.bookName} onChange={this.changeValue}></input>
      </header>
      <section className="section">
        <div className="content">
          {this.ShowLoading()} 
        </div>
        <div className="book-list">
          <ul className="list-ul">
            {this.renderList()}
          </ul>
        </div>
        <div className="chapter-list">
          <ul className="chapter-ul">

          </ul>
        </div>
      </section>
    </div>
  }
}
