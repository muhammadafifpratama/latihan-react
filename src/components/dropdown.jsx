import React, { Component } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown } from 'reactstrap';

class Example extends Component {

    render() {
        return (
            Example = (props) => {
                return (
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}>
                        <DropdownToggle caret>
                            Dropdown
            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>{props.sembarang} </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                )
            })
    }

    contoh = (props) => {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.setState({ dropdownOpen: !this.state.dropdownOpen })}>
                <DropdownToggle caret>
                    Dropdown
        </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>{props.sembarang} </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
}

export default Example;