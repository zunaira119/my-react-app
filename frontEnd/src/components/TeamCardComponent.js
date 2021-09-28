import {Component} from "react";

class TeamCard extends Component {
    render() {
        return (<div>
            <div className="hover-team">
                <div className="our-team"><img src="images/img-1.jpg" alt=""/>
                    <div className="team-content">
                        <h3 className="title">Williamson</h3> <span
                        className="post">Web Developer</span></div>
                    <ul className="social">
                        <li>
                            <a href="#" className="fab fa-facebook"></a>
                        </li>
                        <li>
                            <a href="#" className="fab fa-twitter"></a>
                        </li>
                        <li>
                            <a href="#" className="fab fa-google-plus"></a>
                        </li>
                        <li>
                            <a href="#" className="fab fa-youtube"></a>
                        </li>
                    </ul>
                    <div className="icon"><i className="fa fa-plus" aria-hidden="true"></i></div>
                </div>
                <div className="team-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam,
                        maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed
                        condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                </div>
                <hr className="my-0"/>
            </div>
        </div>);
    }
}

export default TeamCard;