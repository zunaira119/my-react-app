import {Component} from "react";
import ProductCard from "./ProductCardComponent";

class Featured extends Component {
    render() {
        return (
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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="special-menu text-center">
                                <div className="button-group filter-button-group">
                                    <button className="active" data-filter="*">All</button>
                                    <button data-filter=".top-featured">Top featured</button>
                                    <button data-filter=".best-seller">Best seller</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row special-list">
                        <div className="col-lg-3 col-md-6 special-grid best-seller">
                           <ProductCard/>
                        </div>
                        <div className="col-lg-3 col-md-6 special-grid top-featured">
                        <ProductCard/>
                        </div>
                        <div className="col-lg-3 col-md-6 special-grid top-featured">
                        <ProductCard/>
                        </div>
                        <div class="col-lg-3 col-md-6 special-grid best-seller">
                        <ProductCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;