import { Component } from "react";
// import {  } from 'react-redux';
import Login from "./checkoutForms/LoginComponent";
import Register from "./checkoutForms/RegisterComponent";

class Checkout extends Component{
    render(){
        return(
            <div>
                 <div class="all-title-box">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h2>Checkout</h2>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Shop</a></li>
                                    <li class="breadcrumb-item active">Checkout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div class="cart-box-main">
        <div class="container">
            <div class="row new-account-login">
                <div class="col-sm-6 col-lg-6 mb-3">
                    <div class="title-left">
                        <h3>Account Login</h3>
                    </div>
                    <h5><a data-toggle="collapse" href="#formLogin" role="button" aria-expanded="false">Click here to Login</a></h5>
                    <Login/>
                </div>
                <div class="col-sm-6 col-lg-6 mb-3">
                    <div class="title-left">
                        <h3>Create New Account</h3>
                    </div>
                    <h5><a data-toggle="collapse" href="#formRegister" role="button" aria-expanded="false">Click here to Register</a></h5>
                   
                   <Register/>
                </div>
            </div>
          

        </div>
    </div>
            </div>

        );
    }
}
export default Checkout;