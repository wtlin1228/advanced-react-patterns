import React from 'react'
import { renderToggle, fireEvent } from '../../test/utils'
import Usage from '../components/pattern8'

test('renders a toggle component', () => {
  const handleToggle = jest.fn()
  const { toggle, toggleButton } = renderToggle(
    <Usage onToggle={handleToggle} />,
  )
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()
  expect(handleToggle).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(true)
})

test('can click too much', () => {
  const handleToggle = jest.fn()
  const handleReset = jest.fn()
  const {
    toggle,
    toggleButton,
    getByTestId,
    getByText,
    queryByTestId,
  } = renderToggle(
    <Usage onToggle={handleToggle} onReset={handleReset} />,
  )
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()
  toggle()
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()
  toggle()
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOff()
  expect(getByTestId('notice')).not.toBeNull()

  fireEvent.click(getByText('Reset'))
  expect(handleReset).toHaveBeenCalledTimes(1)
  expect(handleToggle).toHaveBeenCalledWith(false)

  expect(toggleButton).toBeOff()
  toggle()
  expect(toggleButton).toBeOn()

  expect(queryByTestId('notice')).toBeNull()
  expect(getByTestId('click-count')).toHaveTextContent('1')

  expect(handleToggle).toHaveBeenCalledTimes(7)
  expect(handleToggle.mock.calls).toEqual([
    [true], // 1
    [false], // 2
    [true], // 3
    [false], // 4
    [false], // 5
    [false], // 6
    [true], // 7
  ])
})
