import {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import {connect} from 'react-redux';
import { actions } from 'react-redux-form';

import {fetchCategories, fetchProducts, fetchfeaturedProducts,postFeedback,loginUser,registerUser,logoutUser,postFavorite,fetchFavorites} from '../redux/ActionCreator';
import Product from "./ProductDetailComponent";
import Products from "./ProductsComponent";
import AllProducts from "./AllProductsComponent";
import Images from "./ImagesComponent";
import ContactUs from "./ContactUsComponent";
import AboutUs from "./AboutUsComponent";
import Cart from "./CartComponent";
import CheckOut from "./CheckoutComponent";
import Favorite from "./FavoriteComponent";

const mapStateToProps = state => {
    return {
        categories: state.categories,
        products: state.products,
        featureProducts: state.featureProducts,
        auth:state.auth,
        favorites: state.favorites,
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
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),
    loginUser: (cred)=>{dispatch(loginUser(cred))},
    registerUser:(values) =>{dispatch(registerUser(values))},
    logoutUser: () => dispatch(logoutUser()),
    postFavorite: (productId) => dispatch(postFavorite(productId)),
    fetchFavorites:() =>dispatch(fetchFavorites()),
    // deleteFavorite:(productId)=>dispatch(deleteFavorite(productId)),
});

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchProducts();
        this.props.fetchfeaturedProducts();
        this.props.fetchFavorites();
        // this.props.deleteFavorite();

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
        const homePage = ({match}) => {
            console.log(this.props.favorites.favorites);
            return (
                this.props.auth.isAuthenticated
                ?
                    <Home categories={this.props.categories}
                          categoriesLoading={this.props.categories.isLoading}
                          categoryErrMess={this.props.categories.errMess}
                          products={this.props.products}
                          featureProducts={this.props.featureProducts}
                          favorites={this.props.favorites}
                          postFavorite={this.props.postFavorite}
                    />
                    :
                    <Home categories={this.props.categories}
                          categoriesLoading={this.props.categories.isLoading}
                          categoryErrMess={this.props.categories.errMess}
                          products={this.props.products}
                          featureProducts={this.props.featureProducts}
                          favorites={false}
                          postFavorite={this.props.postFavorite}
                    />
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
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              this.props.auth.isAuthenticated == true
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/home',
                    state: { from: props.location }
                  }} />
            )} />
          );
        return (
            <div>
                <Header auth={this.props.auth}
                   logoutUser={this.props.logoutUser} 
                   />
                <div>
                    <Switch location={this.props.location}>
                        <Route path='/home' component={homePage}/>
                        <Route path='/product/:productId' component={singleProduct}/>
                        <Route path='/products/:categoryId' component={categoryProducts}/>
                        <Route exact path='/contactUs' component={() => <ContactUs resetFeedbackForm={this.props.resetFeedbackForm} postFeedback = {this.props.postFeedback} />}/>
                        <Route exact path='/products' component={()=> <AllProducts products ={this.props.products} 
                        categories={this.props.categories} 
                       />}/>
                       <Route exact path= '/aboutUs' component={()=> <AboutUs/>}/>
                       <PrivateRoute exact path="/whishlist" component={() => <Favorite  favorites={this.props.favorites}  />} />
                       <Route exact path= '/cart' component={()=> <Cart/>}/>
                       <Route exact path= '/checkout' component={()=> <CheckOut  auth={this.props.auth} 
                                                loginUser={this.props.loginUser} 
                                                registerUser = {this.props.registerUser}
                                                   />}/>

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