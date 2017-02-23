import { connect } from 'react-redux'

import New from '../components/new'
import actions from '../actions'
const { <%= name %>Create } = actions 

export default connect(
  null,
  {create: <%= name %>Create}
)(New)
