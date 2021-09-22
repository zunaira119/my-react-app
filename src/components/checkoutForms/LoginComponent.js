import { Component } from "react";
import { Control, Form, Errors } from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem,FormGroup,
    Button, Row, Col, Label,Input } from 'reactstrap';

class Login extends Component{
    render (){
        return(
            <div>
                 <form class="mt-3 collapse review-form-box" id="formLogin">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="InputEmail" class="mb-0">Email Address</label>
                                <input type="email" class="form-control" id="InputEmail" placeholder="Enter Email"/> </div>
                            <div class="form-group col-md-6">
                                <label for="InputPassword" class="mb-0">Password</label>
                                <input type="password" class="form-control" id="InputPassword" placeholder="Password"/> </div>
                        </div>
                        <button type="submit" class="btn hvr-hover ">Login</button>
                    </form>
                 
            </div>

        );
    }
} 
export default Login;