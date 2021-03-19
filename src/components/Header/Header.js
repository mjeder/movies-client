import React, { Fragment } from 'react'
// Importing the Nav and Navbar components from REact bootstrap
// for our navigation bar at the top of the page.
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// Links that we show when the user is signed in.
const authenticatedOptions = (
  <Fragment>
    {/* To add navigation links, we use Nav.Link components. In React Boostrap the
        path is specified wtih an "href" prop. And paths start with a '#'. */}
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

// Links that we show when the user is signed out.
const unauthenticatedOptions = (
  <Fragment>
    {/* Only show sign up and sign in links when we are signed out */}
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// Links that we always see.
const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)

// The header component needs a user prop.
const Header = ({ user }) => (
  // Set the background color to our primary color.
  // Set the varient to dark (so our text is white)
  // and show all the links after the 'md' breakpoint instead of showing the hamburger menu.
  <Navbar bg="primary" variant="dark" expand="md">
    {/* This is the name of your project */}
    <Navbar.Brand href="#">
      Movies Client
    </Navbar.Brand>
    {/* This is the hamburger menu button that shows the links on small */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    {/* These are the links that can be collapsed on small screens */}
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
