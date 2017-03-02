import React from 'react'
import t from 'tcomb-form'

import styles from '../styles/edit'

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
export default class <%= Name %>Edit extends React.Component {

  constructor (props) {
    super(props)

    const { <%= name %>: {name, website} } = props
    this.state = {
      value: {
        name,
        website
      }
    }
  }

  onSubmit (evt) {
    evt.preventDefault()
    const value = this.refs.form.getValue()
    const id = this.props.<%= name %>.id
    if (value) this.props.update(Object.assign({id}, value))
  }

  render () {
    return (
      <div className={styles.container}>
        <h2>Edit <%= name %></h2>
        <form onSubmit={(evt) => this.onSubmit(evt)} >
          <t.form.Form type={<%= Name %>FormSchema} value={this.state.value} options={options} ref='form' />
          <button type='submit'>Update</button>
        </form>
      </div>
    )
  }

}
