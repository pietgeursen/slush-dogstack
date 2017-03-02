import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'

export const <%= names %>UpdateSuccess = createAction('<%= NAMES %>_UPDATE_SUCCESS')
export const <%= names %>UpdateError = createAction('<%= NAMES %>_UPDATE_ERROR')
export const <%= names %>UpdateStart = createAction('<%= NAMES %>_UPDATE_START')
export const <%= names %>Update = (params) => (dispatch, getState, api) => {
  dispatch(<%= names %>UpdateStart())
  var <%= names %> = api.service('<%= names %>')
  <%= names %>.update(params.id, params)
    .then((<%= names %>) => {
      dispatch(<%= names %>UpdateSuccess(<%= names %>))
      dispatch(push('/<%= names %>'))
    })
    .catch(err => dispatch(<%= names %>UpdateError(err)))
}
