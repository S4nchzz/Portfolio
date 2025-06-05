import Link from "next/link"
import { useState } from "react"
import { Container, Nav, Navbar, NavItem, NavLink } from "react-bootstrap"
import style from "../../styles/modules/nav.module.css"

const NavGlobal = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="p-4" expand="lg">
                <Container fluid>
                    <Navbar.Collapse id="basic-navbar-nav" className={style.collapse}>
                        <Nav
                        onSelect={() => setShowMenu(!showMenu)}
                        className={style.nav}>
                            <NavItem>
                                <NavLink className={style.navItem} as={Link} href="/home">Home</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className={style.navItem} as={Link} href="/projects">Whoami</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className={style.navItem} as={Link} href="/about">Technologies</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className={style.navItem} as={Link} href="contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavGlobal