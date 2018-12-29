import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  padding: 0 !important;
  transition: all 300ms;
`

const NavItem = styled.span.attrs({
  className: 'nav-item'
})`
  color: black;
  font-size: 18px;
`

const NavbarBrand = styled.a.attrs({
  className: 'navbar-brand'
})`
  margin: 6px 16px;
`

const ScrollLink = styled(Link).attrs({
  activeClass: 'active',
  spy: true,
  smooth: 'easeInOutQuint',
  duration: 800
})`
  cursor: pointer;
  padding: 13px;
  transition: background 200ms;
  &:hover {
    background-color: #f2f2f2;
  }
`

const NavBar = () => (
  <Nav className='navbar navbar-light navbar-expand-lg sticky-top'>
    <div className='container-fluid mx-lg-4'>
      <NavbarBrand href='/'>
        <b className='mx-2'>
           
        </b>
      </NavbarBrand>
      <div className='navbar-nav d-none d-lg-flex'>
        <ScrollLink to='home' offset={-100}>
          <NavItem>  Home </NavItem>
        </ScrollLink>
        <ScrollLink to='about' offset={-80}>
          <NavItem>  About </NavItem>
        </ScrollLink>
        <ScrollLink to='achievements' offset={-90}>
          <NavItem> Achievements </NavItem>
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