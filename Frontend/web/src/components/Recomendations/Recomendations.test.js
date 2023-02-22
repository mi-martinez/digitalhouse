import { render } from '@redwoodjs/testing/web'

import Recomendations from './Recomendations'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Recomendations', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Recomendations />)
    }).not.toThrow()
  })
})
