import { createAction } from 'redux-actions'
import { push } from 'react-router-redux'

export const <%= name %>CreateSuccess = createAction('<%= NAME %>_CREATE_SUCCESS')
export const <%= name %>CreateError = createAction('<%= NAME %>_CREATE_ERROR')
export const <%= name %>CreateStart = createAction('<%= NAME %>_CREATE_START')
export const <%= name %>Create = ({name, website}) => (dispatch, getState, api) => {
  dispatch(<%= name %>CreateStart())
  var <%= name %>s = api.service('<%= name %>s')
  <%= name %>s.create({name, website})
    .then((<%= name %>) => {
      dispatch(<%= name %>CreateSuccess(<%= name %>))
      dispatch(push('/<%= name %>s'))
    })
    .catch(err => dispatch(<%= name %>CreateError(err)))
}

