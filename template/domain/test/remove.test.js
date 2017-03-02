import test from 'tape'
import freeze from 'deep-freeze'
import reducer from '../reducer'
import {
  <%= names %>RemoveSuccess,
  <%= names %>RemoveError,
  <%= names %>RemoveStart,
  <%= names %>Remove
} from '../actions/remove'

test('<%= NAMES %>_REMOVE_START', function (t) {
  const initialState = {}
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>RemoveStart())
  t.true(newState.removing)
  t.end()
})

test('<%= NAMES %>_REMOVE_SUCCESS', function (t) {
  const initialState = {}
  freeze(initialState)
  const newName = {name: 'test', website: 'dog.com', id: 1}
  const newState = reducer(initialState, <%= names %>RemoveSuccess(newName))
  t.false(newState.removing)
  t.end()
})

test('<%= NAMES %>_REMOVE_ERROR', function (t) {
  const initialState = {}
  const error = 'bang!'
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>RemoveError(error))
  t.equal(newState.error, error)
  t.end()
})

test('<%= names %>Remove dispatches <%= NAMES %>_REMOVE_START action', function (t) {
  function dispatch (action) {
    t.equal(action.type, '<%= NAMES %>_REMOVE_START')
    t.end()
  }
  const thunk = <%= names %>Remove({name: 'kjkj', website: 'fjdf'})
  const api = {
    service: () => {
      return {
        remove: () => new Promise(() => {}, () => {})
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Remove happy path dispatches <%= NAMES %>_REMOVE_SUCCESS action', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_REMOVE_SUCCESS')
  }
  const thunk = <%= names %>Remove({email: '', password: ''})
  const api = {
    service: () => {
      return {
        remove: () => Promise.resolve()
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Remove unhappy path dispatches <%= NAMES %>_REMOVE_ERROR', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_REMOVE_ERROR')
  }
  const thunk = <%= names %>Remove({email: '', password: ''})
  const api = {
    service: () => {
      return {
        remove: () => Promise.reject('bang')
      }
    }
  }
  thunk(dispatch, null, api)
})

