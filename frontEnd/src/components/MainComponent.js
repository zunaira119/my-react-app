import {Component} from "react";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import {connect} from 'react-redux';
import {fetchCategories,fetchProducts,fetchfeaturedProducts} from '../redux/ActionCreator';

const mapStateToProps = state => {
    return {
        categories: state.categories,
        products:state.products,
        featured:state.featured
    }
}
const mapDispatchToProps = dispatch => ({
    fetchCategories: () => {
        dispatch(fetchCategories())
    },
    fetchProducts: ()=>{
        dispatch(fetchProducts())
    },
    fetchfeaturedProducts:()=>{
        dispatch(fetchfeaturedProducts())
    },
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
        const homePage = () => {
            return (
                <>
                    <Home categories={this.props.categories}
                          categoriesLoading={this.props.categories.isLoading}
                          categoryErrMess={this.props.categories.errMess}
                          products={this.props.products}
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