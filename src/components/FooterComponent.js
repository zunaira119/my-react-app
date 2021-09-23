import {Component} from "react";


class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="footer-widget">
                                        <h4>About ThewayShop</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    {/* <div class="footer-link">
                                <h4>Information</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Customer Service</a></li>
                                    <li><a href="#">Our Sitemap</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                </ul>
                            </div> */}
                                </div>
                                <div className="col-lg-4 col-md-12 col-sm-12">
                                    <div className="footer-link-contact">
                                        <h4>Contact Us</h4>
                                        <ul>
                                            <li>
                                                <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days
                                                    3756 Preston Street Wichita, KS 67213 </p>
                                            </li>
                                            <li>
                                                <p><i className="fas fa-phone-square"></i>Phone: <a
                                                    href="tel:+1-888705770">+1-888 705 770</a></p>
                                            </li>
                                            <li>
                                                <p><i className="fas fa-envelope"></i>Email: <a
                                                    href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-copyright">
                    <p claclassNamess="footer-company">All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a></p>
                </div>


                <a href="#" id="back-to-top" title="Back to top">&uarr;</a>
            </div>
        );
    }
}

export default Footer;