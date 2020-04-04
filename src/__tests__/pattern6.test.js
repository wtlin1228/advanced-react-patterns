import React from 'react'
import { fireEvent, renderToggle } from '../../test/utils'
import Usage from '../components/pattern6'

test('renders a toggle component ', () => {
  const handleToggle = jest.fn()
  const { toggleButton, toggle } = renderToggle(
    <Usage onToggle={handleToggle} onButtonClick={() => {}} />,
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
    <Usage onToggle={handleToggle} onButtonClick={() => {}} />,
  )
  expect(toggleButton).toBeOff()
  fireEvent.click(getByLabelText('custom-button'))
  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
})

test('passes custom props to the custom-button', () => {
  const handleToggle = jest.fn()
  const handleCustomButtonClick = jest.fn()
  const { toggleButton, getByLabelText } = renderToggle(
    <Usage
      onToggle={handleToggle}
      onButtonClick={handleCustomButtonClick}
    />,
  )
  const customButton = getByLabelText('custom-button')

  expect(customButton.getAttribute('id')).toBe('custom-button-id')
  expect(toggleButton).toBeOff()

  fireEvent.click(customButton)

  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
  expect(handleCustomButtonClick).toHaveBeenCalledTimes(1)
})
