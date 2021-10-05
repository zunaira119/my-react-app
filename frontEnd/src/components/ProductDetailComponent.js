import {baseUrl} from "../shared/baseUrl";
import OwlCarousel from 'react-owl-carousel';
import {Loading} from "./LoadingComponent";
import {Link} from 'react-router-dom';

function RenderFeatured({prod}) {
    return (
        <>

            <div class="products-single fix">
                <div class="box-img-hover">
                    <img src={baseUrl + prod.image} class="img-fluid" alt="Image"/>
                    <div class="mask-icon">
                        <ul>
                            <li><Link to={`/product/${prod._id}`} data-toggle="tooltip" data-placement="right"
                                      title="View"><i
                                className="fas fa-eye"></i></Link></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right"
                                   title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right"
                                   title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                        </ul>
                        <a class="cart" href="#">Add to Cart</a>
                    </div>
                </div>
                <div class="why-text">
                    <h4>{prod.name}</h4>
                    <h5> {prod.price}</h5>
                </div>
            </div>

        </>
    )
}

function RenderProduct({product}) {
    let sizeList = Object.keys(product.size).map((k) => {
        return (
            <option key={k} value={k}>{product.size[k]}</option>
        )
    }, this);
    return (
        <>
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-6">
                    <img class="d-block w-100" src={baseUrl + product.image} alt="Third slide"/>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-6">
                    <div class="single-product-details">
                        <h2>{product.name}</h2>
                        <h5>
                            <del>$ 60.00</del>
                            {product.price}
                        </h5>
                        <p class="available-stock"><span> More than 20 available / <a
                            href="#">8 sold </a></span>
                        </p>
                        <h4>Short Description:</h4>
                        <p>{product.discription}</p>
                        <ul>
                            <li>
                                <div className="form-group size-st">
                                    <label className="size-label">Size</label>
                                    <select id="basic" name="size" className=" form-control">
                                        {sizeList}
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
                                <a class="btn hvr-hover wishList" href="#"><i class="fas fa-heart"></i> Add to
                                    wishlist</a>
                                <a class="btn hvr-hover" data-fancybox-close="" href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Product = (props) => {
    const feature = props.featureProducts.featureProducts.map((pro) => {
        return (
            <>
                <div class="item">
                    <RenderFeatured prod={pro}/>
                </div>
            </>
        )
    });
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    } else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else if (props.product != null) {
        return (
            <>
                <div class="all-title-box">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <h2>Product Detail</h2>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Products</a></li>
                                    <li class="breadcrumb-item active">Product Detail</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shop-detail-box-main">
                    <div class="container">
                        <RenderProduct product={props.product}/>
                        <div class="row my-5">
                            <div class="col-lg-12">
                                <div class="title-all text-center">
                                    <h1>Featured Products</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus
                                        enim.</p>
                                </div>
                                <OwlCarousel margin={3} autoplay={true} items={4} loop
                                             class="featured-products-box owl-carousel owl-theme">
                                    {feature}
                                </OwlCarousel>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
export default Product;