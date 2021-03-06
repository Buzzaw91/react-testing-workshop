// simple test with React Testing Library
import React from 'react'
import ReactDOM from 'react-dom'
// 🐨 import the `render`, `fireEvent`, and `cleanup` utilities from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  // 🐨 remove these two lines, React Testing Library will create the div for you
  const div = document.createElement('div')
  document.body.appendChild(div)

  // 🐨 swap ReactDOM.render with React Testing Library's render
  // Note that React Testing Library's render doesn't need you to pass a `div`
  // so you only need to pass one argument. render returns an object with a
  // bunch of utilities on it. For now, let's just grab `container` which is
  // the div that React Testing Library creates for us.
  // 💰 const {container} = render(<Couter />)
  ReactDOM.render(<Counter />, div)

  // 🐨 instead of `div` here you'll want to use the `container` you get back
  // from React Testing Library
  const button = div.querySelector('button')

  expect(button.textContent).toBe('0')

  // 🐨 replace the next two statements with `fireEvent.click(button)`
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  button.dispatchEvent(clickEvent)

  expect(button.textContent).toBe('1')

  // 🐨 replace this with `cleanup()` from React Testing Library
  document.body.removeChild(div)
})

// 💯 you'll want to cleanup after every test in this file, so you can use
// a utility in Jest to automatically run the `cleanup` function after each
// test. Read about it here and implement it at the top of the file:
// 📜 https://jestjs.io/docs/en/setup-teardown

// 💯 this project has @testing-library/jest-dom installed and configured. Swap
// `expect(button.textContent).toBe('0')` with
// `expect(button).toHaveTextContent('0')` and compare the error messages you
// get for those assertions.

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react%20testing&e=03&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
