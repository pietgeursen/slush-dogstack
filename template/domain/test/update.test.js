import test from 'tape'
import freeze from 'deep-freeze'
import reducer from '../reducer'
import {
  <%= names %>UpdateSuccess,
  <%= names %>UpdateError,
  <%= names %>UpdateStart,
  <%= names %>Update
} from '../actions/update'

test('<%= NAMES %>_UPDATE_START', function (t) {
  const initialState = {}
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>UpdateStart())
  t.true(newState.updating)
  t.end()
})

test('<%= NAMES %>_UPDATE_SUCCESS', function (t) {
  const initialState = {}
  freeze(initialState)
  const newName = {name: 'test', website: 'dog.com', id: 1}
  const newState = reducer(initialState, <%= names %>UpdateSuccess(newName))
  t.false(newState.updating)
  t.end()
})

test('<%= NAMES %>_UPDATE_ERROR', function (t) {
  const initialState = {}
  const error = 'bang!'
  freeze(initialState)
  const newState = reducer(initialState, <%= names %>UpdateError(error))
  t.equal(newState.error, error)
  t.end()
})

test('<%= names %>Update dispatches <%= NAMES %>_UPDATE_START action', function (t) {
  function dispatch (action) {
    t.equal(action.type, '<%= NAMES %>_UPDATE_START')
    t.end()
  }
  const thunk = <%= names %>Update({name: 'kjkj', website: 'fjdf'})
  const api = {
    service: () => {
      return {
        update: (creds) => new Promise(() => {}, () => {})
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Update happy path dispatches <%= NAMES %>_UPDATE_SUCCESS action', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_UPDATE_SUCCESS')
  }
  const thunk = <%= names %>Update({email: '', password: ''})
  const api = {
    service: () => {
      return {
        update: (creds) => Promise.resolve(creds)
      }
    }
  }
  thunk(dispatch, null, api)
})

test('<%= names %>Update unhappy path dispatches <%= NAMES %>_UPDATE_ERROR', function (t) {
  t.plan(1)
  var count = 0
  var dispatch = function (action) {
    count++
    if (count === 2) t.equal(action.type, '<%= NAMES %>_UPDATE_ERROR')
  }
  const thunk = <%= names %>Update({email: '', password: ''})
  const api = {
    service: () => {
      return {
        update: (creds) => Promise.reject('bang')
      }
    }
  }
  thunk(dispatch, null, api)
})

