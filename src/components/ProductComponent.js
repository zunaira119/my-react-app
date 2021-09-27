import ProductCard from "./ProductCardComponent";
import {Link} from 'react-router-dom';

const {Component} = require("react");

function Products(props) {

    const categories = props.categories.categories.map((category) => {
        return (
            <div>
                <Link className="list-group-item list-group-item-action" to="/products"
                >{category.name} <small
                    class="text-muted">(100)</small>
                </Link>
            </div>

        );
    });
    return (
        <div>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Products</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Products</li>
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
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                                <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                    <ProductCard/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Products;