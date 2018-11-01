import React from 'react'
import './login.css'
import { InputText } from 'primereact/inputtext';
import { FormGroup, ControlLabel } from "react-bootstrap";
import { Button } from 'primereact/button';
import { Captcha } from 'primereact/captcha';
import axios from 'axios';
import { Globals } from '../globals.js'

class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Username: "",
            Password: "",
            accessToken: ""
        }
        // this.showResponse = this.showResponse.bind(this);

    }
    doLogin = (event) => {
        event.preventDefault();
        const credentials = {
            username: this.state.Username,
            password: this.state.Password
        }
        console.log("credentials", credentials);

        axios.post(Globals.loginAPI, credentials).then(res => {
            console.log("res", res.data.accessToken);
            if (res.data.accessToken != null) {
                this.state.accessToken = res.data.accessToken
                this.props.history.push('/dashboard', this.state.accessToken);

            }
        })
    }
    // showResponse() {
    //     this.growl.show({ severity: 'info', summary: 'Success', detail: 'User Responded' });
    // }
    render() {
        return (
            <div>
                <h1>Movie Portal</h1>
                <div className="Login">
                    <form>
                        <FormGroup controlId="formBasicText">
                            <ControlLabel>Username : </ControlLabel>
                            <InputText type="text" style={{ width: 300 }}
                                onChange={(e) => {
                                    this.setState({ Username: e.target.value })
                                }}></InputText>
                        </FormGroup>
                        <FormGroup style={{ paddingTop: 20 }}>
                            <ControlLabel> Password : </ControlLabel>
                            <InputText type="password" style={{ width: 300 }}
                                onChange={(e) => {
                                    this.setState({ Password: e.target.value })
                                }}></InputText>
                        </FormGroup>
                        <br></br>

                        {/* <FormGroup>
                            <div className="content-section implementation button-demo">
                                <Growl ref={(el) => this.growl = el}></Growl>
                                <Captcha siteKey="6Leq2HcUAAAAABmFYsK52bKkLJjA8R9IKd1PLnM2" onResponse={this.showResponse} />
                            </div>
                        </FormGroup> */}
                        <FormGroup style={{ paddingTop: 20, paddingLeft: 90 }}>
                            <Button label="Click to LOGIN" className="p-button-success"
                                onClick={(event) =>
                                    this.doLogin(event)}
                            />
                        </FormGroup>
                        <FormGroup style={{ paddingTop: 40 }}>
                            <a href="/register">New to Movie Portal Click here to Register</a>
                        </FormGroup>
                    </form>
                </div>
            </div>
        );
    }
}
export default LoginComponent;