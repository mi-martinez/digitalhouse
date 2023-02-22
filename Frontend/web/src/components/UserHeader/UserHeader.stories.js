// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <UserHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import UserHeader from './UserHeader'

export const generated = () => {
  return <UserHeader />
}

export default {
  title: 'Components/UserHeader',
  component: UserHeader,
}
