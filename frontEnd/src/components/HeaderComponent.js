import React, {Component} from 'react';
import Avatar from 'react-avatar';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,Col, Row ,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import {NavLink, Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

    }

    handleLogout() {
        this.props.logoutUser();
    }

    handleLogin(event) {
        alert(this.loginemail.value, this.loginpassword.value);
        this.props.loginUser({email: this.loginemail.value, password: this.loginpassword.value});
        event.preventDefault();
    }

    handleRegister(event) {
        this.props.registerUser({
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            email: this.email.value,
            password: this.password.value
        });
        event.preventDefault();
    }


    render() {
        return (

            <header className="main-header">

                <Navbar className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">

                        <div className="navbar-header">
                            <Button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i className="fa fa-bars"></i>
                            </Button>
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
                                    <NavLink to="/products" className="nav-link ">Products</NavLink>

                                </NavItem>
                                <NavItem className="dropdown">
                                    <a href="#" className="nav-link dropdown-toggle arrow"
                                       data-toggle="dropdown">SHOP</a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                    </ul>
                                </NavItem>
                                <NavItem className="nav-item"><NavLink className="nav-link" to='/contactUs'>Contact
                                    Us</NavLink></NavItem>
                            </Nav>
                        </div>
                        <div className="attr-nav">
                            <ul>
                                <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                                <li className="side-menu"><Link to="/cart">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="badge">3</span>
                                </Link></li>
                                {this.props.auth.isAuthenticated == true ?
                                    <Nav className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                                        <NavItem className="dropdown">
                                            <a href="#" className="nav-link "
                                               data-toggle="dropdown">{this.props.auth.user.firstname + ' ' + this.props.auth.user.lastname}</a>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/cart">Profile</Link></li>
                                                <li><Link to="/whishlist">Wishlist</Link></li>
                                                <li><a href="#" onClick={this.handleLogout}>Log out</a></li>
                                            </ul>
                                        </NavItem>
                                    </Nav> :
                                      <a class="btn hvr-hover login-button" href="#" data-toggle="modal"
                                      data-target=".login-register-form">
                                      <i class="fas fa-sign-in-alt" ></i>
                                   </a>
                                }
                    

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

                <div class="modal fade login-register-form" role="dialog">
                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header">
                                {/* <button type="button" class="close btn-default" data-dismiss="modal">
                                <i className="fa fa-times"></i>
                                </button> */}

                                <ul class="nav nav-tabs">
                                    <li class="active"><a data-toggle="tab" href="#login-form"><i
                                        class="fa fa-user"></i> Login </a></li>
                                    <li><a data-toggle="tab" href="#registration-form"><i
                                        class="fa fa-pen"></i> Register </a></li>
                                </ul>
                                <a href="#" className="close" type="button" data-dismiss="modal"><i
                                    className="fa fa-times"></i></a>
                            </div>
                            <div class="modal-body">
                                <div class="tab-content">
                                    <div id="login-form" class="tab-pane fade in active">
                                        <Form onSubmit={this.handleLogin}>
                                            <FormGroup>
                                                <Label htmlFor="email">Email:</Label>
                                                <Input type="email" class="form-control" id="loginemail"
                                                       name="loginemail"
                                                       innerRef={(input) => this.loginemail = input}
                                                       placeholder="Enter Email"/>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label htmlFor="pwd">Password:</Label>
                                                <Input type="password" class="form-control" id="password"
                                                       name="loginpassword"
                                                       innerRef={(input) => this.loginpassword = input}
                                                       placeholder="Password"/>
                                            </FormGroup>
                                            <div class="checkbox">
                                                <Label><Input type="checkbox" name="remember"/> Remember me</Label>
                                            </div>
                                            <button type="submit" value="submit" class="btn hvr-hover">Login</button>
                                        </Form>
                                    </div>
                                    <div id="registration-form" class="tab-pane fade">
                                        <Form onSubmit={this.handleRegister}>
                                           <Row className="form-group">
                                             <Col md={6}>
                                                    <Label htmlFor="name">First Name:</Label>
                                                    <Input type="text" class="form-control" id="InputName"
                                                           name="firstname"
                                                           innerRef={(input) => this.firstname = input}
                                                           placeholder="First Name"/>
                                                </Col>
                                                <Col md={6}>
                                                    <Label htmlFor="name">Last Name:</Label>
                                                    <Input type="text" class="form-control" id="InputLastname"
                                                           name="lastname" innerRef={(input) => this.lastname = input}
                                                           placeholder="Last Name"/>
                                               </Col>
                                                <Col md={6}>
                                                    <Label htmlFor="newemail">Email:</Label>
                                                    <Input type="email" class="form-control" id="InputEmail1"
                                                           name="email"
                                                           innerRef={(input) => this.email = input}
                                                           placeholder="Enter Email"/>

</Col>
                                                <Col md={6}>
                                                    <Label htmlFor="newpwd">Password:</Label>
                                                    <Input type="password" class="form-control" name="password"
                                                           innerRef={(input) => this.password = input}
                                                           id="InputPassword1"
                                                           placeholder="Password"/>

                                                </Col>
                                                </Row>
                                            <button type="submit" class="btn hvr-hover">Register</button>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;