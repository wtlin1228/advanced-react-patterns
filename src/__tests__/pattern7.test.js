import React from 'react'
import { fireEvent, renderToggle } from '../../test/utils'
import Usage from '../components/pattern7'

test('renders a toggle component ', () => {
  const handleToggle = jest.fn()
  const { toggleButton, toggle } = renderToggle(
    <Usage onToggle={handleToggle} />,
  )
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
})

test('can reset the state of the toggle', () => {
  const handleReset = jest.fn()
  const { toggleButton, toggle, getByText } = renderToggle(
    <Usage onToggle={() => {}} onReset={handleReset} />,
  )
  toggle()
  fireEvent.click(getByText('Reset'))
  expect(toggleButton).toBeOff()
  expect(handleReset).toHaveBeenCalledTimes(1)
  expect(handleReset).toHaveBeenCalledWith(false)
})
