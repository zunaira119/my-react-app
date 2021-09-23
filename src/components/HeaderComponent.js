import React, {Component} from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';


class Header extends Component {

    render() {
        return (

            <header className="main-header">

                <Navbar className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">

                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </button>
                            <NavbarBrand className="navbar-brand" href=""><img src="images/logo.png" className="logo"
                                                                               alt=""/></NavbarBrand>
                        </div>
                        <div className="collapse navbar-collapse test" id="navbar-menu">
                            <Nav className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <NavItem className="nav-item active">
                                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to='/aboutUs'>About Us</NavLink>
                                </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink to="/products" className="nav-link ">Product</NavLink>
                                  
                                </NavItem>
                                <NavItem className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle arrow"
                                       data-toggle="dropdown">SHOP</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="shop-detail.html">Shop Detail</a></li>
                                    </ul>
                                </NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" to='/ourServices'>Our
                                    Service</NavLink></NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" to='/contactUs'>Contact
                                    Us</NavLink></NavItem>
                            </Nav>
                        </div>
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                                <li className="side-menu"><a href="#">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="badge">3</span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="side">
                        <a href="#" className="close-side"><i className="fa fa-times"></i></a>
                        <li className="cart-box">
                            <ul className="cart-list">
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-01.jpg"
                                                                       className="cart-thumb" alt=""/></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>1x - <span className="price">$80.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-02.jpg"
                                                                       className="cart-thumb" alt=""/></a>
                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                    <p>1x - <span className="price">$60.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-03.jpg"
                                                                       className="cart-thumb" alt=""/></a>
                                    <h6><a href="#">Agam facilisis</a></h6>
                                    <p>1x - <span className="price">$40.00</span></p>
                                </li>
                                <li className="total">
                                    <Link to="/cart" className="btn btn-default hvr-hover btn-cart">VIEW CART</Link>
                                    <span className="float-right"><strong>Total</strong>: $180.00</span>
                                </li>
                            </ul>
                        </li>
                    </div>

                </Navbar>

            </header>
        );
    }
}

export default Header;