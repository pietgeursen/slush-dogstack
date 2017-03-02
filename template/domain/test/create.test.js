import test from 'tape'
import freeze from 'deep-freeze'
import reducer from '../reducer'
import {
  <%= names %>CreateSuccess,
  <%= names %>CreateError,
  <%= names %>CreateStart,
  <%= names %>Create
} from '../actions/create'

test('<%= NAMES %>_CREATE_START', function (t) {
  const initialState = {}
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>CreateStart())
  t.true(newState.creating)
  t.end()
})

test('<%= NAMES %>_CREATE_SUCCESS', function (t) {
  const initialState = {}
  freeze(initialState)
  const newName = {name: 'test', website: 'dog.com', id: 1}
  const newState = reducer(initialState, <%= names %>CreateSuccess(newName))
  t.false(newState.creating)
  t.end()
})

test('<%= NAMES %>_CREATE_ERROR', function (t) {
  const initialState = {}
  const error = 'bang!'
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>CreateError(error))
  t.equal(newState.error, error)
  t.end()
})

test('<%= names %>Create dispatches <%= NAMES %>_CREATE_START action', function (t) {
  function dispatch (action) {
    t.equal(action.type, '<%= NAMES %>_CREATE_START')
    t.end()
  }
  const thunk = <%= names %>Create({name: 'kjkj', website: 'fjdf'})
  const api = {
    service: () => {
      return {
        create: (creds) => new Promise(() => {}, () => {})
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Create happy path dispatches <%= NAMES %>_CREATE_SUCCESS action', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_CREATE_SUCCESS')
  }
  const thunk = <%= names %>Create({email: '', password: ''})
  const api = {
    service: () => {
      return {
        create: (creds) => Promise.resolve(creds)
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Create unhappy path dispatches <%= NAMES %>_CREATE_ERROR', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_CREATE_ERROR')
  }
  const thunk = <%= names %>Create({email: '', password: ''})
  const api = {
    service: () => {
      return {
        create: (creds) => Promise.reject('bang')
      }
    }
  }
  thunk(dispatch, null, api)
})

