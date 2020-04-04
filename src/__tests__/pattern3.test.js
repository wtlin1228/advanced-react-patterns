import React from 'react'
import { renderToggle } from '../../test/utils'
import Usage from '../components/pattern3'

test('renders a toggle component', () => {
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
