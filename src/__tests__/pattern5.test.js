import React from 'react'
import { fireEvent, renderToggle } from '../../test/utils'
import Usage from '../components/pattern5'

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

test('can also toggle with the button', () => {
  const handleToggle = jest.fn()
  const { toggleButton, getByLabelText } = renderToggle(
    <Usage onToggle={handleToggle} />,
  )
  expect(toggleButton).toBeOff()
  fireEvent.click(getByLabelText('custom-button'))
  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
})
