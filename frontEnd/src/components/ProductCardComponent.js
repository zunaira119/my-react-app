import {Component} from "react";
import {Link} from 'react-router-dom';
class ProductCard extends Component {
    render() {
        return (
            <div>
                <div class="products-single fix">
                    <div class="box-img-hover">
                        <div class="type-lb">
                            <p class="sale">Sale</p>
                        </div>
                        <img src="images/img-pro-01.jpg" class="img-fluid" alt="Image"/>
                        <div class="mask-icon">
                            <ul>
                                <li><Link to="/productDetail" data-toggle="tooltip" data-placement="right" title="View"><i
                                    class="fas fa-eye"></i></Link></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                                    class="fas fa-sync-alt"></i></a></li>
                                <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                                    class="far fa-heart"></i></a></li>
                            </ul>
                            <a class="cart" href="#">Add to Cart</a>
                        </div>
                    </div>
                    <div class="why-text">
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <h5> $9.79</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;