import {Component} from "react";
import {Link} from 'react-router-dom';
import {baseUrl} from '../shared/baseUrl';

function RenderProduct({product}) {
    return (
        <div class="products-single fix">
            <div class="box-img-hover">
                <div class="type-lb">
                    <p class="sale">Sale</p>
                </div>
                <img src={baseUrl + product.image} class="img-fluid" alt="Image"/>
                <div class="mask-icon">
                    <ul>
                        <li><Link to={`/product/${product._id}`} data-toggle="tooltip" data-placement="right"
                                  title="View"><i
                            className="fas fa-eye"></i></Link></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i
                            class="fas fa-sync-alt"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i
                            class="far fa-heart"></i></a></li>
                    </ul>
                    <a class="cart" href="#">Add to Cart</a>
                </div>
            </div>
            <div class="why-text">
                <h4>{product.name}</h4>
                <h5> PKR{product.price}</h5>
            </div>
        </div>
    );
}

const AllProducts = (props) => {
    const categories = props.categories.categories.map((category) => {
        return (
            <div>
                <Link className="list-group-item list-group-item-action" to={`/products/${category._id}`}
                >{category.name} <small
                    class="text-muted"></small>
                </Link>
            </div>
        );
    });
    const products = props.products.products.map((k) => {
        return (
            <div key={k._id} className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <RenderProduct product={k}/>
            </div>
        )
    }, this);
    return (
        <>
            <div class="all-title-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Products</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shop-box-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                            <div className="product-categori">
                                <div className="filter-sidebar-left">
                                    <div className="title-left">
                                        <h3>Categories</h3>
                                    </div>
                                    {categories}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                            <div className="right-product-box">
                                <div className="row product-categorie-box">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                            <div className="row">

                                                {products}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
export default AllProducts;