import test from 'tape'
import freeze from 'deep-freeze'
import reducer from './reducer'
import {
  <%= name %>CreateSuccess,
  <%= name %>CreateError,
  <%= name %>CreateStart,
  <%= name %>Create
} from './actions'

test('<%= NAME %>_CREATE_START', function (t) {
  const initialState = {}
  freeze(initialState)
  const newState = reducer(initialState, <%= name %>CreateStart())
  t.equal(newState, initialState)
  t.end()
})

test('<%= NAME %>_CREATE_SUCCESS', function (t) {
  const initialState = {}
  freeze(initialState)
  const newClient = {name: 'test', website: 'dog.com', id: 1}
  const newState = reducer(initialState, <%= name %>CreateSuccess(newClient))
  t.equal(newState, newClient)
  t.end()
})

test('<%= NAME %>_CREATE_ERROR', function (t) {
  const initialState = {}
  const error = 'bang!'
  freeze(initialState)
  const newState = reducer(initialState, <%= name %>CreateError(error))
  t.equal(newState.error, error)
  t.end()
})

test('<%= name %>Create dispatches <%= NAME %>_CREATE_START action', function (t) {
  function dispatch (action) {
    t.equal(action.type, '<%= NAME %>_CREATE_START')
    t.end()
  }
  const thunk = <%= name %>Create({name: 'kjkj', website: 'fjdf'})
  const api = {
    service: () => {
      return {
        create: (creds) => new Promise(() => {}, () => {})
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= name %>Create happy path dispatches <%= NAME %>_CREATE_SUCCESS action', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAME %>_CREATE_SUCCESS')
  }
  const thunk = <%= name %>Create({email: '', password: ''})
  const api = {
    service: () => {
      return {
        create: (creds) => Promise.resolve(creds)
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= name %>Create unhappy path dispatches <%= NAME %>_CREATE_ERROR', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAME %>_CREATE_ERROR')
  }
  const thunk = <%= name %>Create({email: '', password: ''})
  const api = {
    service: () => {
      return {
        create: (creds) => Promise.reject('bang')
      }
    }
  }
  thunk(dispatch, null, api)
})

