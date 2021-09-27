import {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Cart from "./CartComponent";
import Checkout from "./CheckoutComponent";
import ContactUs from "./ContactComponent";
import Products from "./ProductComponent";
import ProductDetail from "./ProductDetailComponent";
import {connect} from 'react-redux';
import {fetchCategories} from '../redux/ActionCreator';
import {actions} from 'react-redux-form';

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => {
        dispatch(fetchCategories())
    },
});

class Main extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {
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
                        <Route path='/products' component={() => <Products categories={this.props.categories}/>}/>
                        <Route path='/productDetail' component={() => <ProductDetail/>}/>
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