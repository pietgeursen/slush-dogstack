import test from 'tape'
import freeze from 'deep-freeze'
import reducer from '../reducer'
import {
  <%= names %>FindSuccess,
  <%= names %>FindError,
  <%= names %>FindStart,
  <%= names %>Find
} from '../actions/find'

test('<%= NAMES %>_FIND_START', function (t) {
  const initialState = {}
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>FindStart())
  t.true(newState.finding)
  t.end()
})

test('<%= NAMES %>_FIND_SUCCESS', function (t) {
  const initialState = {}
  freeze(initialState)
  const newName = {name: 'test', website: 'dog.com', id: 1}
  const newState = reducer(initialState, <%= names %>FindSuccess(newName))
  t.false(newState.finding)
  t.end()
})

test('<%= NAMES %>_FIND_ERROR', function (t) {
  const initialState = {}
  const error = 'bang!'
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>FindError(error))
  t.equal(newState.error, error)
  t.end()
})

test('<%= names %>Find dispatches <%= NAMES %>_FIND_START action', function (t) {
  function dispatch (action) {
    t.equal(action.type, '<%= NAMES %>_FIND_START')
    t.end()
  }
  const thunk = <%= names %>Find({name: 'kjkj', website: 'fjdf'})
  const api = {
    service: () => {
      return {
        find: (creds) => new Promise(() => {}, () => {})
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Find happy path dispatches <%= NAMES %>_FIND_SUCCESS action', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_FIND_SUCCESS')
  }
  const thunk = <%= names %>Find({email: '', password: ''})
  const api = {
    service: () => {
      return {
        find: (creds) => Promise.resolve(creds)
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Find unhappy path dispatches <%= NAMES %>_FIND_ERROR', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_FIND_ERROR')
  }
  const thunk = <%= names %>Find({email: '', password: ''})
  const api = {
    service: () => {
      return {
        find: (creds) => Promise.reject('bang')
      }
    }
  }
  thunk(dispatch, null, api)
})

