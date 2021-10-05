import {Component} from "react";
import {Control, Form, Errors} from 'react-redux-form';
import {Button, Row, Col, Label} from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // this.props.postFeedback(values);
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }

    render() {
        return (
            <>
                <div className="all-title-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Contact Us</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active"> Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-box-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="contact-info-left">
                                    <h2>CONTACT INFO</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam,
                                        maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum
                                        rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                    <ul>
                                        <li>
                                            <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br/>Preston
                                                Street Wichita,<br/> KS 67213 </p>
                                        </li>
                                        <li>
                                            <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888
                                                705 770</a></p>
                                        </li>
                                        <li>
                                            <p><i className="fas fa-envelope"></i>Email: <a
                                                href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <div className="contact-form-right">
                                    <h2>GET IN TOUCH</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices
                                        ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at
                                        cursus mauris.</p>
                                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Control.text model=".fullname" id="fullname" name="fullname"
                                                                  placeholder="Full Name"
                                                                  className="form-control form-input"
                                                                  validators={{
                                                                      required,
                                                                      minLength: minLength(3),
                                                                      maxLength: maxLength(15)
                                                                  }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".fullname"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required',
                                                            minLength: 'Must be greater than 2 characters',
                                                            maxLength: 'Must be 15 characters or less'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Control.text model=".email" id="email" name="email"
                                                                  placeholder="Email"
                                                                  className="form-control form-input"
                                                                  validators={{
                                                                      required, validEmail
                                                                  }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".email"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required',
                                                            validEmail: 'Invalid Email Address'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Control.text model=".subject" id="subject" name="subject"
                                                                  placeholder="Subject"
                                                                  className="form-control form-input"
                                                                  validators={{
                                                                      required
                                                                  }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".subject"
                                                        show="touched"
                                                        messages={{
                                                            required: 'Required'
                                                        }}
                                                    />

                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Control.textarea model=".message" id="message" name="message"
                                                                      rows="5"
                                                                      className="form-control form-input"/>
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                                <div className="submit-button text-center">
                                                    <Button class="btn hvr-hover" id="submit" type="submit">Send
                                                        Message
                                                    </Button>
                                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ContactUs;