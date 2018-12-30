import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0px 1px 5px grey;
  padding: 3px !important;
  transition: all 300ms;
`

const NavItem = styled.span.attrs({
  className: 'nav-item'
})`
  font-size: 18px;
`

const NavbarBrand = styled.a.attrs({
  className: 'navbar-brand'
})`
  margin: 5px 15px;
  cursor: pointer;
`

const ScrollLink = styled(Link).attrs({
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 800
})`
  cursor: pointer;
  padding: 12px;
  transition: background 200ms;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const NavBar = () => (
  <Nav className='navbar navbar-light navbar-expand-lg sticky-top'>
    <div className='container-fluid mx-lg-4'>
      <NavbarBrand href='/'>
        Dacharat
      </NavbarBrand>
      <div className='navbar-nav d-none d-lg-flex'>
        <ScrollLink to='about' offset={-80}>
          <NavItem>  About </NavItem>
        </ScrollLink>
        <ScrollLink to='experiences' offset={-90}>
          <NavItem> Experiences </NavItem>
        </ScrollLink>
        <ScrollLink to='projects' offset={-90}>
          <NavItem>  Projects </NavItem>
        </ScrollLink>
        <ScrollLink to='contact' offset={-90}>
          <NavItem> Contact </NavItem>
        </ScrollLink>
      </div>
    </div>
  </Nav>
)

export default NavBar