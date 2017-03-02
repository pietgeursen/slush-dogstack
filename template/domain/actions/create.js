import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'

export const <%= names %>CreateSuccess = createAction('<%= NAMES %>_CREATE_SUCCESS')
export const <%= names %>CreateError = createAction('<%= NAMES %>_CREATE_ERROR')
export const <%= names %>CreateStart = createAction('<%= NAMES %>_CREATE_START')
export const <%= names %>Create = ({name, website}) => (dispatch, getState, api) => {
  dispatch(<%= names %>CreateStart())
  var <%= names %> = api.service('<%= names %>')
  <%= names %>.create({name, website})
    .then((<%= name %>) => {
      dispatch(<%= names %>CreateSuccess(<%= name %>))
      dispatch(push('/<%= names %>'))
    })
    .catch(err => dispatch(<%= names %>CreateError(err)))
}

