import {Component} from "react";
import Carousel from 'react-bootstrap/Carousel';

class Slider extends Component {
    render() {
        return (
            <div>
                <Carousel variant="dark">
                    <Carousel.Item className="slides-container">
                        <img
                            className="d-block w-100"
                            src="images/banner-01.jpg"
                            alt="First slide"
                        />
                        <div className="container">
                            <Carousel.Caption className="caption">
                                <h1 className=""><strong>First slide label</strong></h1>
                                <p className="">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="slides-container">
                        <img
                            className="d-block w-100"
                            src="images/banner-02.jpg?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <div className="container">
                            <Carousel.Caption className="caption">
                                <h1 className=""><strong>First2 slide label</strong></h1>
                                <p className="">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <p><a class="btn hvr-hover" href="#">Shop New</a></p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className="slides-container">
                        <img
                            className="d-block w-100"
                            src="images/banner-03.jpg?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />
                        <div class="container">
                            <Carousel.Caption className="caption">
                                <h1 className=""><strong>First3 slide label</strong></h1>
                                <p className="">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <p><a class="btn  hvr-hover" href="#">Shop New</a></p>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        );
    }
}

export default Slider;