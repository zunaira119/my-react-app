import { Component } from "react";
import {baseUrl} from '../shared/baseUrl';
class Favorite extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        const fav = this.props.favorites.favorites[0].products.map((favorite) => {
            return(
                <>
                <tr>
                 <td class="thumbnail-img">
                                        <a href="#">
									<img class="img-fluid" src={baseUrl + favorite.image} alt="" />
								</a>
                                    </td>
                                    <td class="name-pr">
                                        <a href="#">
									{favorite.name}
								</a>
                                    </td>
                                    <td class="price-pr">
                                        <p>{favorite.price}</p>
                                    </td>
                                    <td class="quantity-box">In Stock</td>
                                    <td class="add-pr">
                                        <a class="btn hvr-hover" href="#">Add to Cart</a>
                                    </td>
                                    <td class="remove-pr">
                                        <a href="#" >
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
                    <h2>Wishlist</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active">Wishlist</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="wishlist-box-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="table-main table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Product Name</th>
                                    <th>Unit Price </th>
                                    <th>Stock</th>
                                    <th>Add Item</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                             
                                 {fav}
                               
                               
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </>
        )
    }
}
export default  Favorite;