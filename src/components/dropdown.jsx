import React, { useState, } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';

const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Dropdown
        </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>{props.sembarang} </DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}

export default Example;