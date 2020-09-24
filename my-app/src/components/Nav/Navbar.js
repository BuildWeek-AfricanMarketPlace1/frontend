import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavIcon } from './NavbarElements.js'

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon />
					</NavLogo>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
