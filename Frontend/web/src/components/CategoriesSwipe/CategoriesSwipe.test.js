import { render } from '@redwoodjs/testing/web'

import CategoriesSwipe from './CategoriesSwipe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CategoriesSwipe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoriesSwipe />)
    }).not.toThrow()
  })
})
