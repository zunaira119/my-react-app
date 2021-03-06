import {Component} from "react";
import {baseUrl} from '../shared/baseUrl';
import {Link} from 'react-router-dom';
import ImageCarousel from "./CrousalComponent";
import Blog from "./BlogComponent";

function RenderCategory({category}) {
    return (
        <>
            <div className="shop-cat-box">
                <img key={category._id} className="img-fluid" src={baseUrl + category.image} alt={category.name}/>
                <Link className="btn hvr-hover" to={`/products/${category._id}`}>{category.name}</Link>
            </div>
        </>
    );
}
function RenderProducts({product, postFavorite,favorites,postCart,user}) {
  
    let favorite = favorites == false ? false: favorites != null ? favorites[0].products.some((fav) => fav._id === product._id) : false;
    return (
        <>
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className="sale">Sale</p>
                    </div>
                    <img src={baseUrl + product.image} className="img-fluid" alt="Image"/>
                    <div className="mask-icon">
                        <ul>
                            <li><Link to={`/product/${product._id}`} data-toggle="tooltip" data-placement="right"
                                      title="View"><i
                                className="fas fa-eye"></i></Link></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right"
                                   title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li>
                                {/* <a href="#" data-toggle="tooltip" data-placement="right"
                                   title="Add to Wishlist"><i className="far fa-heart"></i></a> */}

                            <a href="#" outline color="primary" onClick={() => favorite ? alert('Already favorite') :  postFavorite(product._id)}>
                                    {favorite ?
                                       <i className="fa fa-heart"></i>
                                        : 
                                        <i className="far fa-heart"></i>
                                    }
                                </a>
                                   
                                   </li>
                        </ul>
                        <a className="cart" href="#" onClick={() => user ? postCart(product._id) : alert('You are not logged In ')}>Add to Cart</a>
                    
                    </div>
                </div>
                <div className="why-text">
                    <h4>{product.name}</h4>
                    <h5> {product.price}</h5>
                </div>
            </div>
        </>
    );
}

function Home(props) {
    const category = props.categories.categories.map((category) => {
        return (
            <div key={category._id} className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={category._id}>
                <RenderCategory category={category}/>
            </div>
        );
    });
    const feature = props.featureProducts.featureProducts.map((featureProduct) => {
        
        return (
            <div key={featureProduct._id} className="col-lg-3 col-md-6 special-grid best-seller">
                <RenderProducts product={featureProduct} postFavorite={props.postFavorite} favorites={props.favorites== false ? props.favorites : props.favorites.favorites} postCart={props.postCart} user={props.user}/>
            </div>
        )
    })
    return (
        <div>
            <ImageCarousel/>
            <div className="categories-shop">
                <div className="container">
                    <div className="row">
                        {category}
                    </div>
                </div>
            </div>
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>Featured Products</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                            </div>
                        </div>
                    </div>

                    <div class="row special-list">
                        {feature}
                    </div>
                </div>
            </div>
            <Blog/>
        </div>
    );

}

export default Home;