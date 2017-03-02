import { connect } from 'react-redux'

import <%= Name %>s from '../components/index'
import { <%= names %>Find } from '../actions/find'
import { get<%= Name %>s } from '../getters'

export default connect(
  get<%= Name %>s,
  {find: <%= names %>Find}
)(<%= Name %>s)
