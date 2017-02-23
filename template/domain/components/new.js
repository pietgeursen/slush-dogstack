import React from 'react'
import t from 'tcomb-form'

import styles from '../styles/new'

import { FormSchema } from '../types'

const options = {
  fields: {
    name: {
      error: 'Invalid name'
    }
  }
}
export default class New extends React.Component {

  onSubmit (evt) {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    if (value) this.props.create(value)
  }

  render () {
    return (
      <div className={styles.formContainer}>
        <h2>Create a new <%= name %></h2>
        <form onSubmit={(evt) => this.onSubmit(evt)} >
          <t.form.Form type={FormSchema} options={options} ref='form' />
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }

}
