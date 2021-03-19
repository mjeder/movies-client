import React, { Fragment } from 'react'
// Importing the Nav and Navbar components from React bootstrap
// for our navigation bar at the top of the page
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// Links that we show when the user is signed in
const authenticatedOptions = (
  <Fragment>
    {/* To add navigation links, we use Nav.Link components. In React Bootstrap
        the path is specificed with an `href` prop. And paths start with a `#` */}
    <Nav.Link href="#movies">Movies</Nav.Link>
    <Nav.Link href="#movies-create">Create Movie</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)
// Links that we show when the user is signed out
const unauthenticatedOptions = (
  <Fragment>
    {/* Only show sign up and sign in links when we are signed out */}
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)
// Links that we always see
const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
  </Fragment>
)
// The header component needs a user prop
const Header = ({ user }) => (
  // set the background color to our primary color
  // set the variant to dark (so our text is white)
  // and show all the links after the "md" breakpoint instead of showing the hamburger menu
  <Navbar bg="primary" variant="dark" expand="md">
    {/* This is the name of your project in the top left */}
    <Navbar.Brand href="#">
      Zoomies Movie Client
    </Navbar.Brand>
    {/* This is the hamburger menu button that shows the links on small screens */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    {/* These are the links that can be collapsed on small screens */}
    <Navbar.Collapse id="basic-navbar-nav">
      {/* ml-auto automatically adds margin to the left of these nav links
          that pushes the nav links to the right side of the navbar */}
      <Nav className="ml-auto">
        {/* If we have a user, show a span with the user's email in it.
            Add the `navbar-text` class so it has the same color as the other nav links.
            mr-2 adds margin to the right, to push it away from the other links */}
        {/* user && <span className="navbar-text mr-2">Welcome, {user.email}</span> */}
        {/* Longhand syntax */}
        { user ? <span className="navbar-text mr-2">Welcome, {user.email}</span> : ''}
        {/* Render the alwaysOptions no matter what */}
        { alwaysOptions }
        {/* If we have a user, show the authenticatedOptions (signed in options)
            otherwise show the unauthenticatedOptions (signed out options) */}
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
export default Header
