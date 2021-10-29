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
									<img className="img-fluid" src={baseUrl + favorite.image} alt="" />
								</a>
                                    </td>
                                    <td className="name-pr">
                                        <a href="#">
									{favorite.name}
								</a>
                                    </td>
                                    <td className="price-pr">
                                        <p>{favorite.price}</p>
                                    </td>
                                    <td className="quantity-box">In Stock</td>
                                    <td className="add-pr">
                                        <a className="btn hvr-hover" href="#">Add to Cart</a>
                                    </td>
                                    <td className="remove-pr">
                                        <a href="#" >
									<i className="fas fa-times"></i>
								</a>
                                    </td>
                                    </tr>
                </>
            )
        });
        return(
            <>
              <div className="all-title-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Wishlist</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Shop</a></li>
                        <li className="breadcrumb-item active">Wishlist</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="wishlist-box-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="table-main table-responsive">
                        <table className="table">
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