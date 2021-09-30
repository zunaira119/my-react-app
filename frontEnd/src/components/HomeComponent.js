import {Component} from "react";
import {baseUrl} from '../shared/baseUrl';
import {Link} from 'react-router-dom';
import ImageCarousel from "./CrousalComponent";

function RenderCategory({category}) {
    return (
        <>
            <div className="shop-cat-box">
                <img key={category._id} className="img-fluid" src="images/t-shirts-img.jpg" alt={category.name}/>
                <a className="btn hvr-hover" href="#">{category.name}</a>
            </div>
        </>
    );
}

function RenderProducts({product}) {   
    return (
        <>
            <div class="products-single fix">
                <div class="box-img-hover">
                    <div class="type-lb">
                        <p class="sale">Sale</p>
                    </div>
                    <img src="images/img-pro-01.jpg" class="img-fluid" alt="Image"/>
                    <div class="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i
                                class="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right"
                                   title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right"
                                   title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                        </ul>
                        <a class="cart" href="#">Add to Cart</a>
                    </div>
                </div>
                <div class="why-text">
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={category._id}>
                <RenderCategory category={category}/>
            </div>
        );
    });
    const feature = props.products.products.map((featureProduct)=>{
        return(
            <div class="col-lg-3 col-md-6 special-grid best-seller">
                <RenderProducts product = {featureProduct}/>
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
            <div class="products-box">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="title-all text-center">
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
        </div>
    );

}

export default Home;