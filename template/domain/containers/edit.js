import { connect } from 'react-redux'

import Edit from '../components/edit'
import { <%= names %>Update } from '../actions/update'
import { getEditProps } from '../getters'

export default connect(
  getEditProps,
  {update: <%= names %>Update}
)(Edit)
