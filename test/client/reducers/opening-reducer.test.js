import openingReducer from '../../../client/reducers/opening'

test ('ENTER_SITE works', () => {
  const expected = 'home'
  const destination = 'home'
  const initialState = 'opening'
  const action = {
      type: 'ENTER_SITE',
      destination
  }

  const actual = openingReducer(initialState, action)

  expect(actual).toEqual(expected)
})

test('initial state set to opening', () => {
  const expected = 'opening'
  const action = {}
  const actual = openingReducer(undefined, action)

  expect(actual).toEqual(expected)
})
