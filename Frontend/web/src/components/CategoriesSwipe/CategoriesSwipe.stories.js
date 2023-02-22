// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CategoriesSwipe {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CategoriesSwipe from './CategoriesSwipe'

export const generated = () => {
  return <CategoriesSwipe />
}

export default {
  title: 'Components/CategoriesSwipe',
  component: CategoriesSwipe,
}
