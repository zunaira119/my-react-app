import {Component} from "react";
import {Link} from 'react-router-dom';
import TeamCard from "./TeamCardComponent";

class About extends Component {
    render() {
        return (
            <div>
                <div className="all-title-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>ABOUT US</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                    <li className="breadcrumb-item active">ABOUT US</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-box-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="noo-sh-title">We are <span>ThewayShop</span></h2>
                                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                                    magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                    corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                    molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                    pariatur?"</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-frame"><img class="img-thumbnail img-fluid"
                                                                   src="images/about-img.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-sm-6 col-lg-4">
                                <div className="service-block-inner">
                                    <h3>We are Trusted</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="service-block-inner">
                                    <h3>We are Professional</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                <div className="service-block-inner">
                                    <h3>We are Expert</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-12">
                                <h2 className="noo-sh-title">Meet Our Team</h2>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                              <TeamCard/>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                               <TeamCard/>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                              <TeamCard/>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                               <TeamCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;