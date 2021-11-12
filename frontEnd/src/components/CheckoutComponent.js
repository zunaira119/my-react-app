import {Component} from "react";
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    render() {
      
        const shoppingCart = this.props.cartItems.cartItems[0].products.map((cartI) => {
            return (
                <>
                    <div class="media mb-2 border-bottom">
                        <div class="media-body"><a href="detail.html"> {cartI.name}</a>
                            <div class="small text-muted">{cartI.price} <span class="mx-2">|</span> Qty: 1 <span
                                class="mx-2">|</span> Subtotal: $80.00
                            </div>
                        </div>
                    </div>
                </>
            )
        });
        return (
            <>
                <div className="all-title-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Checkout</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Shop</a></li>
                                    <li className="breadcrumb-item active">Checkout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-box-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-6 mb-3">
                                <div className="checkout-address">
                                    <div className="title-left">
                                        <h3>Shipping address</h3>
                                    </div>
                                    <form className="needs-validation" novalidate>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label for="firstName">First name *</label>
                                                <input type="text" className="form-control" id="firstName"
                                                       placeholder="" value="" required/>
                                                <div className="invalid-feedback"> Valid first name is required.</div>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label for="lastName">Last name *</label>
                                                <input type="text" class="form-control" id="lastName" placeholder=""
                                                       value="" required/>
                                                <div className="invalid-feedback"> Valid last name is required.</div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="username">Username *</label>
                                            <div className="input-group">
                                                <input type="text" class="form-control" id="username" placeholder=""
                                                       required/>
                                                <div className="invalid-feedback"> Your username is required.</div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="email">Email Address *</label>
                                            <input type="email" class="form-control" id="email" placeholder=""/>
                                            <div className="invalid-feedback"> Please enter a valid email address for
                                                shipping updates.
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="address">Address *</label>
                                            <input type="text" class="form-control" id="address" placeholder=""
                                                   required/>
                                            <div className="invalid-feedback"> Please enter your shipping address.</div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="address2">Address 2 *</label>
                                            <input type="text" class="form-control" id="address2" placeholder=""/></div>
                                        <div class="row">
                                            <div class="col-md-5 mb-3">
                                                <label for="country">Country *</label>
                                                <select class="wide w-100" id="country">
                                                    <option value="Choose..." data-display="Select">Choose...</option>
                                                    <option value="United States">United States</option>
                                                </select>
                                                <div class="invalid-feedback"> Please select a valid country.</div>
                                            </div>
                                            <div class="col-md-4 mb-3">
                                                <label for="state">State *</label>
                                                <select class="wide w-100" id="state">
                                                    <option data-display="Select">Choose...</option>
                                                    <option>California</option>
                                                </select>
                                                <div class="invalid-feedback"> Please provide a valid state.</div>
                                            </div>
                                            <div class="col-md-3 mb-3">
                                                <label for="zip">Zip *</label>
                                                <input type="text" class="form-control" id="zip" placeholder=""
                                                       required/>
                                                <div class="invalid-feedback"> Zip code required.</div>
                                            </div>
                                        </div>
                                        <hr class="mb-4"/>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="same-address"/>
                                            <label class="custom-control-label" for="same-address">Shipping address is
                                                the same as my billing address</label>
                                        </div>
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="save-info"/>
                                            <label class="custom-control-label" for="save-info">Save this information
                                                for next time</label>
                                        </div>
                                        <hr class="mb-4"/>
                                    </form>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-6 mb-3">
                                <div class="row">

                                    <div class="col-md-12 col-lg-12">
                                        <div class="odr-box">
                                            <div class="title-left">
                                                <h3>Shopping cart</h3>
                                            </div>
                                            <div class="rounded p-2 bg-light">
                                              
                                            {shoppingCart}
                                               
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12">
                                        <div class="order-box">
                                            <div class="title-left">
                                                <h3>Your order</h3>
                                            </div>
                                            <div class="d-flex">
                                                <div class="font-weight-bold">Product</div>
                                                <div class="ml-auto font-weight-bold">Total</div>
                                            </div>
                                            <hr class="my-1"/>
                                            <div class="d-flex">
                                                <h4>Sub Total</h4>
                                                <div class="ml-auto font-weight-bold"> $ 440</div>
                                            </div>
                                            <div class="d-flex">
                                                <h4>Discount</h4>
                                                <div class="ml-auto font-weight-bold"> $ 40</div>
                                            </div>
                                            <hr class="my-1"/>
                                            <div class="d-flex">
                                                <h4>Coupon Discount</h4>
                                                <div class="ml-auto font-weight-bold"> $ 10</div>
                                            </div>
                                            <div class="d-flex">
                                                <h4>Tax</h4>
                                                <div class="ml-auto font-weight-bold"> $ 2</div>
                                            </div>
                                            <div class="d-flex">
                                                <h4>Shipping Cost</h4>
                                                <div class="ml-auto font-weight-bold"> Free</div>
                                            </div>
                                            <hr/>
                                            <div class="d-flex gr-total">
                                                <h5>Grand Total</h5>
                                                <div class="ml-auto h5"> $ 388</div>
                                            </div>
                                            <hr/>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex shopping-box"><a href="checkout.html"
                                                                               class="ml-auto btn hvr-hover">Place
                                        Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </>
        )
    }

}

export default CheckOut;