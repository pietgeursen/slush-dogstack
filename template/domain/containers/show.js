import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Show from '../components/show'
import { getShowProps } from '../getters'
import { <%= names %>Remove } from '../actions/remove'

export default connect(
  getShowProps,
  {
    edit: (id) => browserHistory.push("/<%= names %>/" + id + "/edit"),
    remove: <%= names %>Remove
  } // TODO should we just pass a function that links to edit
)(Show)

