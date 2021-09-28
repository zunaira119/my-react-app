import {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Cart from "./CartComponent";
import Checkout from "./CheckoutComponent";
import ContactUs from "./ContactComponent";
import Product from "./ProductComponent";
import ProductDetail from "./ProductDetailComponent";
import {connect} from 'react-redux';
import {fetchCategories, fetchProducts} from '../redux/ActionCreator';
import {actions} from 'react-redux-form';

const mapStateToProps = state => {
    return {
        categories: state.categories,
        products:state.products,
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => {
        dispatch(fetchCategories())
    },
    fetchProducts: () => {
        dispatch(fetchProducts())
    },
});

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchProducts();
    }

    render() {
        const ProductWithId = ({match}) => {
            return(
              <ProductDetail
               product={this.props.products.products.filter((product) => product._id === match.params.productId)[0]}
                  isLoading={this.props.products.isLoading}
                  errMess={this.props.products.errMess}
                />
            );
          };
        return (
            <div>
                <Header/>
                <div>
                    <Switch location={this.props.location}>
                        <Route path='/home' component={() => <Home categories={this.props.categories}/>}/>
                        <Route path='/aboutUs' component={() => <About/>}/>
                        <Route path='/cart' component={() => <Cart/>}/>
                        <Route path='/checkout' component={() => <Checkout/>}/>
                        <Route path='/contactUs' component={() => <ContactUs/>}/>
                        <Route path='/products' component={() => 
                        <Product categories={this.props.categories}
                            products = {this.props.products}/>}/>
                        <Route path='/productDetail/:productId' 
                        component={ProductWithId}/>
                        {/* <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback = {this.props.postFeedback} />} /> */}
                        <Redirect to="/home"/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));