import {Component} from "react";
import Slider from './CarouselComponent';
import Category from './CategoryComponent';
import Featured from "./FeaturedComponent";
import {baseUrl} from '../shared/baseUrl';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {data: props.categories}
    }

    render() {
        const {data} = this.state;
        return (
            <div>
                <Slider/>
                <Category categories={data}/>
                <Featured/>
            </div>
        );
    }
}

export default Home;