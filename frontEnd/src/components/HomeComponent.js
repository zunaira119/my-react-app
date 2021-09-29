import {Component} from "react";
import {baseUrl} from '../shared/baseUrl';
import {Link} from 'react-router-dom';
import ImageCrousal from "./CrousalComponent";

class Home extends Component {
    render() {
        return (
            <div>
            <ImageCrousal/>
            </div>
        );
    }
}

export default Home;