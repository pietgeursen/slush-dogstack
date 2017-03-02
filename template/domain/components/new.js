import React from 'react'
import t from 'tcomb-form'

import styles from '../styles/new'

import { <%= Name %>FormSchema } from '../types'

const options = {
  fields: {
    name: {
      error: 'Invalid name'
    },
    website: {
      error: 'Invalid website url'
    }
  }
}
export default class <%= Name %>Create extends React.Component {

  onSubmit (evt) {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) this.props.create(value)
  }

  render () {
    return (
      <div className={styles.container}>
        <h2>Add a <%= Name %></h2>
        <form onSubmit={(evt) => this.onSubmit(evt)} >
          <t.form.Form type={<%= Name %>FormSchema} options={options} ref='form' />
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }

}
