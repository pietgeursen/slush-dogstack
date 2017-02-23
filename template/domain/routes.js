import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Index from './containers/index'
import New from './containers/new'

export default function () {
  return <Route path='<%= name %>'>
    <IndexRoute component={Index} />
    <Route path='new' component={New} />
  </Route>
}
