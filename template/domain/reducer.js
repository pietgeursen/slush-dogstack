import {combineReducers} from 'redux'

const <%= names %> = function (state = [], action) {
  switch (action.type) {
    case '<%= NAMES %>_CREATE_SUCCESS':
      return [action.payload, ...state]
    case '<%= NAMES %>_FIND_SUCCESS':
      return action.payload
    default:
      return state
  }
}

const finding = function (state = false, action) {
  switch (action.type) {
    case '<%= NAMES %>_FIND_START':
      return true
    case '<%= NAMES %>_FIND_SUCCESS':
      return false
    default:
      return state
  }
}

const creating = function (state = false, action) {
  switch (action.type) {
    case '<%= NAMES %>_CREATE_START':
      return true
    case '<%= NAMES %>_CREATE_SUCCESS':
      return false
    default:
      return state
  }
}

const updating = function (state = false, action) {
  switch (action.type) {
    case '<%= NAMES %>_UPDATE_START':
      return true
    case '<%= NAMES %>_UPDATE_SUCCESS':
      return false
    default:
      return state
  }
}

const removing = function (state = false, action) {
  switch (action.type) {
    case '<%= NAMES %>_REMOVE_START':
      return true
    case '<%= NAMES %>_REMOVE_SUCCESS':
      return false
    default:
      return state
  }
}
const error = function (state = {}, action) {
  switch (action.type) {
    case '<%= NAMES %>_FIND_START':
    case '<%= NAMES %>_CREATE_START':
    case '<%= NAMES %>_UPDATE_START':
    case '<%= NAMES %>_REMOVE_START':
      return {}
    case '<%= NAMES %>_FIND_ERROR':
    case '<%= NAMES %>_CREATE_ERROR':
    case '<%= NAMES %>_UPDATE_ERROR':
    case '<%= NAMES %>_REMOVE_ERROR':
      return action.payload
    default:
      return state
  }
}
export default combineReducers({
  <%= names %>,
  finding,
  creating,
  updating,
  removing,
  error
})
