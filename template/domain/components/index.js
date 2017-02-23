import React from 'react'

import { Link } from 'react-router'
import styles from '../styles/index'

export default class Index extends React.Component {

  render () {
    return (
      <div>
        <h2><%= name %></h2>
        <Link to='/<%= name %>/new'>Create a new <%= name %></Link>
      </div>
    )
  }

}
