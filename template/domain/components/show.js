import React from 'react'

import styles from '../styles/show'

export default class <%= Name %>Create extends React.Component {

  render () {
    const {<%= name %>, edit, remove} = this.props
    return (
      <div className={styles.container}>
        <div className={styles.nameAndButtonsContainer}>
          <h2>{ <%= name %>.name }</h2>
          <div className={styles.buttonsContainer}>
            <button className={styles.button} onClick={() => remove(<%= name %>.id)}>Delete</button>
            <button className={styles.button} onClick={() => edit(<%= name %>.id)}>Edit</button>
          </div>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.profileContainer}>
            <h4><%= Name %> Profile</h4>
            <div className={styles.formElement}>
              <span className={styles.label}>Company Name</span>
              <div className={styles.content}>
                { <%= name %>.name }
              </div>
            </div>
            <div className={styles.formElement}>
              <span className={styles.label}>Website</span>
              <div className={styles.content}>
                { <%= name %>.website }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
