//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
//Component
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import OrderCar from "../buy/components/BuyCar";
import {Link} from 'react-router-dom'
//Actions
import {userLogoutRequest} from "../../actions";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleLogout = () => {
        this.props.userLogoutRequest()
    };

    render() {
        const {user} = this.props;
        return (
            <Navbar className={'navbar navbar-dark bg-dark'} expand="md" style={styles.header}>
                <NavbarToggler onClick={this.toggle}/>
                <Link className="navbar-brand" to="/">Shop Items</Link>
                <OrderCar/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem onClick={this.toggle}>
                            <Link className="nav-link" to='/buy'>Shop</Link>
                        </NavItem>
                        <NavItem onClick={this.toggle}>
                            <Link className="nav-link" to='/order'>Orders</Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Manage
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.toggle}>
                                    <Link className={'dropdown-item'} to='/provider'>Providers</Link>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem onClick={this.toggle}>
                                    <Link className={'dropdown-item'} to='/measure'>Measures</Link>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem onClick={this.toggle}>
                                    <Link className={'dropdown-item'} to='/products'>Products</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {
                            user &&
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {user.name}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.handleLogout}>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

Header.propTypes = {
    user: PropTypes.object,
    userLogoutRequest: PropTypes.func.isRequired,
    loadingLogout: PropTypes.bool.isRequired,

};

const mapStateToProps = (state) => ({
    user: state.userAuthStatusReducer.user,
    loadingLogout: state.userLogoutStatusReducer.loading
});

const mapDispatchToProps = {
    userLogoutRequest
};
const styles = {
    header: {
        position: 'fixed',
        width: "100%",
        zIndex: "1000",
        marginTop: '0px'
    },
    container: {
        marginTop: "0px"
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);