import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list">列表</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;