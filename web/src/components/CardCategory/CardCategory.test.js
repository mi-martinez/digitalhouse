import { render } from '@redwoodjs/testing/web'

import CardCategory from './CardCategory'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CardCategory', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardCategory />)
    }).not.toThrow()
  })
})
