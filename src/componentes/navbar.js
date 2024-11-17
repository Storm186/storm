import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Logo</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/login">Iniciar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/register">Registrarse</NavLink>
          </NavItem>
          <NavItem>
            <Button color="secondary" onClick={() => {/* Aquí iría la lógica para cambiar a modo oscuro */}}>
              Modo oscuro
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default navbar;
