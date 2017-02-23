import { createAction } from 'redux-actions'

export const <%= domainName %><%= ActionName %>Success = createAction('<%= DOMAIN_NAME %>_<%= ACTION_NAME %>_SUCCESS')
export const <%= domainName %><%= ActionName %>Error = createAction('<%= DOMAIN_NAME %>_<%= ACTION_NAME %>_ERROR')
export const <%= domainName %><%= ActionName %>Start = createAction('<%= DOMAIN_NAME %>_<%= ACTION_NAME %>_START')
export const <%= domainName %><%= ActionName %> = ({name, website}) => (dispatch, getState, api) => {
  dispatch(<%= domainName %><%= ActionName %>Start())
  var <%= domainName %>s = api.service('<%= domainName %>s')
  <%= domainName %>s.create({name, website})
    .then((<%= domainName %>) => {
      dispatch(<%= domainName %><%= ActionName %>Success(<%= domainName %>))
    })
    .catch(err => dispatch(<%= domainName %><%= ActionName %>Error(err)))
}

