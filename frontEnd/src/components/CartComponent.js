import { Component } from "react";
import { Link } from "react-router-dom";
import { cartItems } from "../redux/cart";
import {baseUrl} from '../shared/baseUrl';
class Cart extends Component{
   
    render(){
        const item = this.props.cartItems.cartItems[0].products.map((cartI) => {
            return(
                <>
               <tr>
                                    <td class="thumbnail-img">
                                        <a href="#">
									<img class="img-fluid" src={baseUrl + cartI.image} alt="" />
								</a>
                                    </td>
                                    <td class="name-pr">
                                        <a href="#">
									{cartI.name}
								</a>
                                    </td>
                                    <td class="price-pr">
                                        <p>{cartI.price}</p>
                                    </td>
                                    <td class="quantity-box"><input type="number" size="4" value="1" min="0" step="1" class="c-input-text qty text"/></td>
                                    <td class="total-pr">
                                        <p>$ 80.0</p>
                                    </td>
                                    <td class="remove-pr">
                                        <a href="#">
									<i class="fas fa-times"></i>
								</a>
                                    </td>
                                </tr>
                </>
            )
        });
        return(
            <>
             <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Cart</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active">Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="cart-box-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="table-main table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                              
                              {item}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-12 d-flex shopping-box"><Link to="/checkout" class="ml-auto btn hvr-hover">Checkout</Link> </div>
            </div>
        </div>
    </div>
            </>
        )
    }
}
export default Cart;