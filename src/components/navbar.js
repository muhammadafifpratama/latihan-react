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



const Confused = (props) => {
    const [isopen, setisopen] = useState(false);

    const toggle = () => setisopen(!isopen);

    return (
        <div>
            <Navbar color="faded" light expand="md">
                <table><NavbarBrand href="/">puseeeeeng</NavbarBrand></table>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={!isopen} navbar>
                    <Nav navbar>

                        <NavItem>
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
                        </NavItem>
                    </Nav>
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Options
              </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                </DropdownItem>
                            <DropdownItem>
                                Option 2
                </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                logout
                </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Confused;