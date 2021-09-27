import {Component} from "react";
import {Link} from 'react-router-dom';
import {baseUrl} from "../shared/baseUrl";

function RenderCategory({category}) {
    return (
        <div className="shop-cat-box">
            <img className="img-fluid" src={baseUrl + category.image} alt=""/>
            <Link className="btn hvr-hover" to="/products">{category.name}</Link>
        </div>
    );
}

const Category = (props) => {
    const categories = props.categories.categories.map((category) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={category.id}>
                <RenderCategory category={category}/>
            </div>
        );
    });
    return (
        <div className="categories-shop">
            <div className="container">
                <div className="row">
                    {categories}
                </div>
            </div>
        </div>
    );

}

export default Category;