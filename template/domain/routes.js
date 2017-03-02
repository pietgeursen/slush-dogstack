import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './containers/index'
import New from './containers/new'
import Show from './containers/show'
import Edit from './containers/edit'

export default function () {
  return <Route path='<%= names %>'>
    <IndexRoute component={Index} />
    <Route path='new' component={New} />
    <Route path=':id' component={Show} />
    <Route path=':id/edit' component={Edit} />
  </Route>
}
