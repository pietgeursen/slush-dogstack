import { connect } from 'react-redux'

import New from '../components/new'
import { <%= names %>Create } from '../actions/create'

export default connect(
  null,
  {create: <%= names %>Create}
)(New)
