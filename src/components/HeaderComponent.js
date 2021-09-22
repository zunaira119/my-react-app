import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink,Link } from 'react-router-dom';


class Header extends Component {

    render() {
        return(
        
            <header className="main-header">
             
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">
                    
                        <div className="navbar-header">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                            <NavbarBrand className="navbar-brand" href=""><img src="images/logo.png" className="logo" alt=""/></NavbarBrand>
                        </div>
                        <div className="collapse navbar-collapse test" id="navbar-menu">
                            <Nav className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                <NavItem className="nav-item active">
                                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                                    </NavItem>
                                <NavItem className="nav-item">
                                    <NavLink className="nav-link" to='/aboutUs'>About Us</NavLink>
                                </NavItem>
                                <NavItem className="dropdown megamenu-fw">
                                    <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">Product</a>
                                    <ul className="dropdown-menu megamenu-content" role="menu">
                                        <NavItem>
                                            <div className="row">
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Top</h6>
                                                    <div className="">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Jackets</a></li>
                                                            <li><a href="shop.html">Shirts</a></li>
                                                            <li><a href="shop.html">Sweaters & Cardigans</a></li>
                                                            <li><a href="shop.html">T-shirts</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                             
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Bottom</h6>
                                                    <div className="">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Swimwear</a></li>
                                                            <li><a href="shop.html">Skirts</a></li>
                                                            <li><a href="shop.html">Jeans</a></li>
                                                            <li><a href="shop.html">Trousers</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                              
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Clothing</h6>
                                                    <div className="">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Top Wear</a></li>
                                                            <li><a href="shop.html">Party wear</a></li>
                                                            <li><a href="shop.html">Bottom Wear</a></li>
                                                            <li><a href="shop.html">Indian Wear</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Accessories</h6>
                                                    <div className="">
                                                        <ul className="menu-col">
                                                            <li><a href="shop.html">Bags</a></li>
                                                            <li><a href="shop.html">Sunglasses</a></li>
                                                            <li><a href="shop.html">Fragrances</a></li>
                                                            <li><a href="shop.html">Wallets</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                             
                                            </div>
                                        </NavItem>
                                    </ul>
                                </NavItem>
                                <NavItem className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="shop-detail.html">Shop Detail</a></li>
                                    </ul>
                                </NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" to='/ourServices'>Our Service</NavLink></NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" to='/contactUs'>Contact Us</NavLink></NavItem>
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
                                    <a href="#" className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Delica omtantur </a></h6>
                                    <p>1x - <span className="price">$80.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb" alt="" /></a>
                                    <h6><a href="#">Omnes ocurreret</a></h6>
                                    <p>1x - <span className="price">$60.00</span></p>
                                </li>
                                <li>
                                    <a href="#" className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb" alt="" /></a>
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