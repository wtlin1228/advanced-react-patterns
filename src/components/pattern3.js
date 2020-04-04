// Flexible Compound Components with context

import React from 'react'
import { Switch } from './switch'

const ToggleContext = React.createContext({
  on: false,
  toggle: () => {},
})

class Toggle extends React.Component {
  static On = ({ children }) => (
    <ToggleContext.Consumer>
      {({ on }) => {
        return on ? children : null
      }}
    </ToggleContext.Consumer>
  )
  static Off = ({ children }) => (
    <ToggleContext.Consumer>
      {({ on }) => {
        return on ? null : children
      }}
    </ToggleContext.Consumer>
  )
  static Button = (props) => (
    <ToggleContext.Consumer>
      {({ on, toggle }) => {
        return <Switch on={on} onClick={toggle} {...props} />
      }}
    </ToggleContext.Consumer>
  )

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on),
    )
  state = { on: false, toggle: this.toggle }

  render() {
    return (
      <ToggleContext.Provider value={this.state}>
        {this.props.children}
      </ToggleContext.Provider>
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
      <div>
        <Toggle.Button />
      </div>
    </Toggle>
  )
}
Usage.title = 'Flexible Compound Components'

export { Toggle, Usage as default }
