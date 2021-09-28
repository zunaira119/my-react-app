import {Component} from "react";
import {Link} from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";
import Featured from "./FeaturedComponent";

function RenderProductDetail({product}) {
    return (
        <>
           <div class="col-xl-5 col-lg-5 col-md-6">
        <img class="d-block w-100 img-fluid" src={baseUrl + product.image} alt=""/>
        </div>
        <div class="col-xl-7 col-lg-7 col-md-6">
       
    <div class="single-product-details">
        <h2>{product.name}</h2>
        <h5>
            <del>{product.price}</del>
            {product.salePrice}
        </h5>
        <p class="available-stock"><span> More than 20 available / <a
            href="#">8 sold </a></span>
        </p>
        <h4>Short Description:</h4>
        <p>{product.discription} </p>
        <ul>
            <li>
                <div class="form-group size-st">
                    <label class="size-label">Size</label>
                    <select id="basic" class="selectpicker show-tick form-control">
                        <option value="0">Size</option>
                        <option value="0">S</option>
                        <option value="1">M</option>
                        <option value="1">L</option>
                        <option value="1">XL</option>
                        <option value="1">XXL</option>
                        <option value="1">3XL</option>
                        <option value="1">4XL</option>
                    </select>
                </div>
            </li>
            <li>
                <div class="form-group quantity-box">
                    <label class="control-label">Quantity</label>
                    <input class="form-control" value="0" min="0" max="20" type="number"/>
                </div>
            </li>
        </ul>

        <div class="price-box-bar">
            <div class="cart-and-bay-btn">
                <a class="btn hvr-hover" data-fancybox-close="" href="#">Buy New</a>
                <a class="btn hvr-hover" data-fancybox-close="" href="#">Add to cart</a>
            </div>
        </div>

        <div class="add-to-btn">
            <div class="add-comp">
                <a class="btn hvr-hover" href="#"><i class="fas fa-heart"></i> Add to
                    wishlist</a>
            </div>
            <div class="share-bar">
                <a class="btn hvr-hover" href="#"><i class="fab fa-facebook"
                                                     aria-hidden="true"></i></a>
                <a class="btn hvr-hover" href="#"><i class="fab fa-google-plus"
                                                     aria-hidden="true"></i></a>
                <a class="btn hvr-hover" href="#"><i class="fab fa-twitter"
                                                     aria-hidden="true"></i></a>
                <a class="btn hvr-hover" href="#"><i class="fab fa-pinterest-p"
                                                     aria-hidden="true"></i></a>
                <a class="btn hvr-hover" href="#"><i class="fab fa-whatsapp"
                                                     aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
    </div>
    </>);
}

function ProductDetail(props) {
    return (
        <div>
            <div class="all-title-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2>Product Detail</h2>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item"><Link to="/products">Product</Link></li>
                                <li class="breadcrumb-item active">Shop Detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop-detail-box-main">
                <div class="container">
                    <div class="row">

                            {/* <div id="carousel-example-1" class="single-product-slider carousel slide"
                                 data-ride="carousel">
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active"><img class="d-block w-100"
                                                                           src="images/big-img-01.jpg"
                                                                           alt="First slide"/></div>
                                    <div class="carousel-item"><img class="d-block w-100"
                                                                    src="images/big-img-02.jpg" alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item"><img class="d-block w-100"
                                                                    src="images/big-img-03.jpg" alt="Third slide"/>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carousel-example-1" role="button"
                                   data-slide="prev">
                                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel-example-1" role="button"
                                   data-slide="next">
                                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    <span class="sr-only">Next</span>
                                </a>
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-1" data-slide-to="0" class="active">
                                        <img class="d-block w-100 img-fluid" src="images/smp-img-01.jpg" alt=""/>
                                    </li>
                                    <li data-target="#carousel-example-1" data-slide-to="1">
                                        <img class="d-block w-100 img-fluid" src="images/smp-img-02.jpg" alt=""/>
                                    </li>
                                    <li data-target="#carousel-example-1" data-slide-to="2">
                                        <img class="d-block w-100 img-fluid" src="images/smp-img-03.jpg" alt=""/>
                                    </li>
                                </ol>
                            </div> */}
                      
                            <RenderProductDetail product={props.product}/>
                    </div>

                    <div class="row my-5">
                        <div class="col-lg-12">
                            <Featured/>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default ProductDetail;