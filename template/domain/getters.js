import { createStructuredSelector, createSelector } from 'reselect'
import { idSelector } from '../app/getters.js'

export const get<%= Name %>s = (state) => { return {<%= names %>: state.<%= names %>.<%= names %>} }

export const get<%= Name %> = createSelector(
  get<%= Name %>s,
  idSelector,
  (<%= names %>, id) => <%= names %>.<%= names %>.find(<%= name %> => <%= name %>.id === id)
)

export const getShowProps = createStructuredSelector(
  {<%= name %>: get<%= Name %>}
)
export const getEditProps = createStructuredSelector(
  {<%= name %>: get<%= Name %>}
)
