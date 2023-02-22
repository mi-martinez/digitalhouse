import { render } from '@redwoodjs/testing/web'

import SearchComponent from './SearchComponent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchComponent />)
    }).not.toThrow()
  })
})
