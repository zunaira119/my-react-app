import {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';

import {fetchCategories, fetchProducts, fetchfeaturedProducts} from '../redux/ActionCreator';
import Product from "./ProductDetailComponent";
import Products from "./ProductsComponent";
import Images from "./ImagesComponent";
import ContactUs from "./ContactUsComponent";

const mapStateToProps = state => {
    return {
        categories: state.categories,
        products: state.products,
        featureProducts: state.featureProducts,
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => {
        dispatch(fetchCategories())
    },
    fetchProducts: () => {
        dispatch(fetchProducts())
    },
    fetchfeaturedProducts: () => {
        dispatch(fetchfeaturedProducts())
    },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
});

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchProducts();
        this.props.fetchfeaturedProducts();

    }

    render() {
        const categoryProducts = ({match}) => {
            return (
                <>
                    <Products products={this.props.products.products.filter((product) =>
                        product.categoryId === match.params.categoryId)}
                              categories={this.props.categories}
                    />
                </>
            )

        }
        const homePage = () => {
            return (
                <>
                    <Home categories={this.props.categories}
                          categoriesLoading={this.props.categories.isLoading}
                          categoryErrMess={this.props.categories.errMess}
                          products={this.props.products}
                          featureProducts={this.props.featureProducts}

                    />
                </>
            )
        }
        const singleProduct = ({match}) => {
            return (
                <>
                    <Product
                        product={this.props.products.products.filter((product) => product._id === match.params.productId)[0]}
                        isLoading={this.props.products.isLoading}
                        errMess={this.props.products.errMess}
                        featureProducts={this.props.featureProducts}
                    />
                </>
            )
        }
        return (
            <div>
                <Header/>
                <div>
                    <Switch location={this.props.location}>
                        <Route path='/home' component={homePage}/>
                        <Route path='/product/:productId' component={singleProduct}/>
                        <Route path='/products/:categoryId' component={categoryProducts}/>
                        <Route exact path='/contactUs' component={() => <ContactUs resetFeedbackForm={this.props.resetFeedbackForm}/>}/>
                        {/* <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback = {this.props.postFeedback} />} /> */}
                        <Redirect to="/home"/>
                    </Switch>
                </div>
                {/* <Images/> */}
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));