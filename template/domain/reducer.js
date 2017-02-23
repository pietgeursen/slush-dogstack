
const <%= name %> = function (state = {}, action) {
  switch (action.type) {
    case '<%= NAME %>_CREATE_SUCCESS':
      return action.payload
    case '<%= NAME %>_CREATE_ERROR':
      return {error: action.payload}
    default:
      return state
  }
}

export default <%= name %>
