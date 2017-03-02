import React from 'react'

import { browserHistory } from 'react-router'
import styles from '../styles/index'

export default class <%= Name %>s extends React.Component {

  componentDidMount () {
    this.props.find()
  }

  render () {
    const { <%= names %> } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.titleAndButtonsContainer}>
          <h2><%= Name %>s</h2>
          <div className={styles.buttonsContainer}>
            <button className={styles.create<%= Name %>} onClick={() => browserHistory.push('/<%= names %>/new')}>
              Add a <%= Name %>
            </button>
          </div>
        </div>
        <div className={styles.headersContainer}>
          <div className={styles.<%= name %>Column}>
            CLIENT
          </div>
          <div className={styles.<%= name %>Column}>
            WEBSITE
          </div>
        </div>
        <div className={styles.<%= names %>Container}>
          {<%= names %>.map((<%= name %>, i, arr) => {
            return <div key={i} className={"styles.<%= name %>} <%= name %>-name"} onClick={() => browserHistory.push("/<%= names %>/" + <%= name %>.id)}>
              <div className={styles.<%= name %>Column}>
                { <%= name %>.name }
              </div>
              <div className={styles.<%= name %>Column}>
                { <%= name %>.website }
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }

}
