import React from 'react';
import './App.css';
import { List, Button } from 'antd';
import "antd/dist/antd.css";
import {searchMusic, getMusicDetails} from './service/api.service'
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
    searchMusic({name:this.state.bookName,page:1}).then(res => {
      this.setState({
        loading: false,
        bookList: res.data.list
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
  toDetails = (id) => {
    getMusicDetails(id).then(res => {
      console.log(res)
    })
  }
  loadMore = () => {
    return (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button>loading more</Button>
      </div>
    )
  }
  renderList = () => {
    if(this.state.bookList.length>0&&!this.state.loading) {
      return (
        <List
          style={{
            width: '50%',
            margin: '0 auto',
            padding: '10px',
            boxSizing: 'border-box',
            color: 'white'
          }}
          bordered
          itemLayout="horizontal"
          loadMore={this.loadMore}
          dataSource={this.state.bookList}
          renderItem={item => (
            <List.Item onClick={() => {this.toDetails(item.id)}}>
              {item.songName}--{item.artistName}--{item.albumName}
            </List.Item>
          )}
        />
      )
    }
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
          {this.renderList()}
        </div>
        <div className="chapter-list">
          <ul className="chapter-ul">

          </ul>
        </div>
      </section>
    </div>
  }
}
