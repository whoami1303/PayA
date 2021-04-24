import React from 'react';
import { Navbar, Nav }   from 'react-bootstrap';
import { ReactComponent as Logo} from '../../assets/images/paya_logo.svg';

import logo from '../../assets/images/paya_logo.svg';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <Navbar bg="" expand="lg" variant="light">
      <Navbar.Brand href="#">
        <img
          src={logo}
          width="100"
          height="100"
          className={`${"img-fluid"}`}
          alt="PayA Logo"
              />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>

      <Navbar.Collapse className={`${"justify-content-end"}`}id="basic-navbar-nav">
        <Nav.Link className={`${"nav-link text-center"}`}>Placeholder</Nav.Link>
        <Nav.Link className={`${"nav-link text-center"}`}>Placeholder</Nav.Link>
        <Nav.Link className={`${"nav-link text-center"}`}>Placeholder</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
