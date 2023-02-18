// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <CardCategory {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import CardCategory from './CardCategory'

export const generated = () => {
  return <CardCategory />
}

export default {
  title: 'Components/CardCategory',
  component: CardCategory,
}
