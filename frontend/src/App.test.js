import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './App';
import LoginPage from './components/authentication/views/login'
import RegisterPage from './components/authentication/views/register'
import { Card } from './components/authentication/ui-components/cardBody'
import { LoginValidationSchema } from './components/authentication/forms/loginForm'
import { RegisterValidationSchema } from './components/authentication/forms/registerForm'


describe('REACT - Components test', () => {
  test('Card Body render ok', () => {
    const view = render(<Router><Card /></Router>);
    expect(view).toBeDefined();
  })
  test('login Form render ok', () => {
    const view = render(<Router><LoginValidationSchema /></Router>);
    expect(view).toBeDefined();
  })
  test('Login Page render ok', () => {
    const view = render(<Router><LoginPage /></Router>);
    expect(view).toBeDefined();
  })
  test('register Form render ok', () => {
    const view = render(<Router><RegisterValidationSchema /></Router>);
    expect(view).toBeDefined();
  })
  test('Register Page render ok', () => {
    const view = render(<Router><RegisterPage /></Router>);
    expect(view).toBeDefined();
  })
});

describe('REACT - Integration test', () => {
  test('Renderizamos la app', () => {
    const view = render(<Router><App /></Router>)
    expect(view).toBeDefined();
  })
  test('Email Input render', () => {
    const placeholdertext = "Email";
    render(<Router><LoginPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Password Input render', () => {
    const placeholdertext = "Password";
    render(<Router><LoginPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('First Name Input render', () => {
    const placeholdertext = "firstName";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Last Name Input render', () => {
    const placeholdertext = "lastName";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Email register Input render', () => {
    const placeholdertext = "Email";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })
  test('Password register Input render', () => {
    const placeholdertext = "Password";
    render(<Router><RegisterPage /></Router>)
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeDefined();
  })

});


test('landing on login page', () => {
  const loginRoute = '/login'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <Router initialEntries={[loginRoute]}>
      <App />
    </Router>,
  )

  // verify navigation to "login" route
  expect(screen.getByText(/login/i)).toBeInTheDocument()
})


test('landing on register page', () => {
  const registerRoute = '/register'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <Router initialEntries={[registerRoute]}>
      <App />
    </Router>,
  )

  // verify navigation to "register" route
  expect(screen.getByText(/register/i)).toBeInTheDocument()
})
