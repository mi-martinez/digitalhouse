import { render } from '@redwoodjs/testing/web'

import UserHeader from './UserHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserHeader />)
    }).not.toThrow()
  })
})
