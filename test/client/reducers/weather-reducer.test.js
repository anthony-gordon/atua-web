import weatherReducer from '../../../client/reducers/weather'

test('initial state for weather reducer', ()=> {
  const expected = []
  const action = {}
  const actual = weatherReducer(undefined, action)

  expect(actual).toEqual(expected)
})

test('RECEIVE_WEATHER works', () => {
    const expected = [
      {
        rain: 'heavy',
        temp: 20,
        wind_dir: 'SSE'
      }
    ]
    const weather = [
      {
        rain: 'heavy',
        temp: 20,
        wind_dir: 'SSE'
      }
    ]
    const initialState = []
    const action = {
      type: 'RECEIVE_WEATHER',
      weather
    }
    const actual = weatherReducer(initialState, action)
    expect(actual).toEqual(expected)

})
