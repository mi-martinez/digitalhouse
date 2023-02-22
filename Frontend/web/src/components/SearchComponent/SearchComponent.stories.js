// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <SearchComponent {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import SearchComponent from './SearchComponent'

export const generated = () => {
  return <SearchComponent />
}

export default {
  title: 'Components/SearchComponent',
  component: SearchComponent,
}
