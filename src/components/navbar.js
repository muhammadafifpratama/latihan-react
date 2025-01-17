import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/action'

const Navabar = (props) => {
    const [isopen, setisopen] = useState(false);

    const toggle = () => setisopen(!isopen);

    return (
        <div>
            <Navbar color="faded" light expand="md" className="justify-content-end nav" >
                <Link className='navbar-brand' to='./' style={{ color: 'white' }}>
                    home
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={!isopen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                {props.role ? props.username : "Options"}
                            </DropdownToggle>
                            {
                                props.role
                                    ?
                                    <DropdownMenu right>
                                        <Link to='/login'>
                                            <DropdownItem onClick={props.logout}>

                                                Logout
                                            </DropdownItem>
                                        </Link>
                                        <link to="/ganti">
                                            <DropdownItem >

                                                Ganti password
                                            </DropdownItem>
                                        </link>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to='/'>
                                                home
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to='/not-home'>
                                                not home
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to='/carousel'>
                                                carousel
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                    :
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <Link to='/login'>
                                                Login
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to='/'>
                                                home
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to='/not-home'>
                                                not home
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <Link to='/carousel'>
                                                carousel
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <Link to="/register">
                                                Register
                                            </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                            }
                        </UncontrolledDropdown>
                        {/* <NavItem>
                            <NavLink href="/">home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/not-home    ">not home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/carousel    ">carousel</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login   ">login</NavLink>
                        </NavItem> */}
                    </Nav>

                </Collapse>
            </Navbar>
        </div >
    );
}

const mapStatetoProps = (state) => {
    return {
        username: state.user.username,
        role: state.user.role
    }
}

export default connect(mapStatetoProps, { logout })(Navabar);