import { createAction } from 'redux-actions'

export const <%= names %>FindSuccess = createAction('<%= NAMES %>_FIND_SUCCESS')
export const <%= names %>FindError = createAction('<%= NAMES %>_FIND_ERROR')
export const <%= names %>FindStart = createAction('<%= NAMES %>_FIND_START')
export const <%= names %>Find = (params) => (dispatch, getState, api) => {
  dispatch(<%= names %>FindStart())
  var <%= names %> = api.service('<%= names %>')
  <%= names %>.find(params)
    .then((<%= names %>) => {
      dispatch(<%= names %>FindSuccess(<%= names %>))
    })
    .catch(err => dispatch(<%= names %>FindError(err)))
}

