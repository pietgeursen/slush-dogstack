import { connect } from 'react-redux'

import New from '../components/new'
import { <%= name %>Create } from '../actions'

export default connect(
  null,
  {create: <%= name %>Create}
)(New)
