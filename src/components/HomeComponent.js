import {Component} from "react";
import Slider from './CarouselComponent';
import Category from './CategoryComponent';
import Featured from "./FeaturedComponent";


class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                <Category/>
                <Featured/>
            </div>
        );
    }
}

export default Home;