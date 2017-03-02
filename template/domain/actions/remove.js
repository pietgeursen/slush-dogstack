import { createAction } from 'redux-actions'
import { browserHistory } from 'react-router'

export const <%= names %>RemoveSuccess = createAction('<%= NAMES %>_REMOVE_SUCCESS')
export const <%= names %>RemoveError = createAction('<%= NAMES %>_REMOVE_ERROR')
export const <%= names %>RemoveStart = createAction('<%= NAMES %>_REMOVE_START')
export const <%= names %>Remove = (params) => (dispatch, getState, api) => {
  dispatch(<%= names %>RemoveStart())
  var <%= names %> = api.service('<%= names %>')
  <%= names %>.remove(params)
    .then((<%= names %>) => {
      dispatch(<%= names %>RemoveSuccess(<%= names %>))
      browserHistory.push(`/<%= names %>`)
    })
    .catch(err => dispatch(<%= names %>RemoveError(err)))
}

