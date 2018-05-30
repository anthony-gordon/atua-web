import {navigate} from '../../../client/actions/opening'

test('ENTER_SITE action working', () => {
  const destination = 'ibiza'
  const expected = {
    type: 'ENTER_SITE',
    destination
  }

  const actual = navigate(destination)

  expect(actual).toEqual(expected)
})
