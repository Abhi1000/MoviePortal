import React, { Component } from 'react'
import { FormGroup, ControlLabel } from "react-bootstrap";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './register.css'
import axios from 'axios';
import {Globals} from '../globals.js'


class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            password: "",
            FirstName: "",
            LastName: ""
        }
    }
    SignUp = (event) => {
        event.preventDefault()
        const userData = {
            userName: this.state.Username,
            password: this.state.Password,
            firstName: this.state.FirstName,
            lastName: this.state.LastName
        }
        axios.post(Globals.registerAPI, userData).then(res => {
            console.log("res", res.status);
            if (res.data != null) {
                this.props.history.push('/');
            }

        })
    }
    render() {
        return (
            <div>
                <h1>Register Yourself Here.....</h1>
                <div className="Register">
                    <form>
                        <FormGroup>
                            <ControlLabel>Username : </ControlLabel>
                            <InputText type="text" style={{ width: 300 }}
                                onChange={(e) => {
                                    this.setState({ Username: e.target.value })
                                }}></InputText>
                            {/* value={this.state.Username}  */}
                        </FormGroup>
                        <FormGroup style={{ paddingTop: 20 }}>
                            <ControlLabel> Password : </ControlLabel>
                            <InputText type="password" style={{ width: 300 }}
                                onChange={(e) => {
                                    this.setState({ Password: e.target.value })
                                }}></InputText>
                        </FormGroup>
                        <FormGroup style={{ paddingTop: 20 }}>
                            <ControlLabel> FirstName : </ControlLabel>
                            <InputText type="text" style={{ width: 300 }}
                                onChange={(e) => {
                                    this.setState({ FirstName: e.target.value })
                                }}></InputText>
                        </FormGroup>
                        <FormGroup style={{ paddingTop: 20 }}>
                            <ControlLabel> LastName : </ControlLabel>
                            <InputText type="text" style={{ width: 300 }}
                                onChange={(e) => {
                                    this.setState({ LastName: e.target.value })
                                }}></InputText>
                        </FormGroup>
                        <FormGroup style={{ paddingTop: 20, paddingLeft: 90 }}>
                            <Button label="Click to Sign Up" className="p-button-success"
                                onClick={(event) =>
                                    this.SignUp(event)}>
                            </Button>
                        </FormGroup>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;