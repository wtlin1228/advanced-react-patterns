// Compound Components
//
// React Hooks: Refactor compound components to hooks
// https://kentcdodds.com/blog/compound-components-with-react-hooks

import React from 'react'
import { Switch } from './switch'

class Toggle extends React.Component {
  static On = ({ on, children }) => (on ? children : null)
  static Off = ({ on, children }) => (on ? null : children)
  static Button = ({ on, toggle, ...props }) => (
    <Switch on={on} onClick={toggle} {...props} />
  )

  state = { on: false }
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    )

  render() {
    const { on } = this.state
    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {
        on,
        toggle: this.toggle,
      }),
    )
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return (
    <Toggle onToggle={onToggle}>
      <Toggle.On>The button is on</Toggle.On>
      <Toggle.Off>The button is off</Toggle.Off>
      <Toggle.Button />
    </Toggle>
  )
}
Usage.title = 'Compound Components'

export { Toggle, Usage as default }
