import React from 'react';
import './index.css';

export default class Loading extends React.Component {

  render() {
    return <div className="loading">
      <div className="eleven">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  }
} 
