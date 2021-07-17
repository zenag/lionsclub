import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import Header from '../../common/header/Header';
import Home from '../../screens/home/Home';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Redirect } from 'react-router-dom'
import axios from 'axios';


class Login extends Component {

//constructor definitions for state variables declarations
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            reqUsername: "dispNone",
            reqPassword: "dispNone",
            error: "dispNone",
            loginSucess: false,
            loggedIn: sessionStorage.getItem("access_token") == null ? false : true,
        }
    }

    // Input Handler definitions to set the parameter value username input by user

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    // Password Handler definitions to set the parameter value of input password entered by user

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    //click event on login button to read the username and password values entered by user and to take
    //necessary actions further
    loginButtonHandler = () => {
        this.state.username === "" ? this.setState({ reqUsername: "dispBlock" }) : this.setState({ reqUsername: "dispNone" });
        this.state.password === "" ? this.setState({ reqPassword: "dispBlock" }) : this.setState({ reqPassword: "dispNone" });

        const data={contactNumber:this.state.username,password:this.state.password};
        axios.post(this.props.baseUrl+'/auth/login',data).then(
        (response) => {
                    sessionStorage.setItem('access_token', response.data.access_token);
                    sessionStorage.setItem('username', response.data.username);
                    ReactDOM.render(<Home baseUrl={this.props.baseUrl} />, document.getElementById('root'))
                    }

        ).catch(err => this.setState({ error: "dispBlock" }));
    }

    render() {
        return (
            <div>
            
                {this.state.loggedIn === true ?   
                    <Redirect to="/home" />
                    :
                    <div>
                        {/* Calling Header definitions */}

                        <Card className="cardStyle">                   
                            <CardContent>
                                <Typography variant="h4">
                                    LOGIN
                                </Typography> <br />

                        {/* Login form Implementations for logging in into the application     */}
                                <FormControl required className="formControl">
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} value={this.state.username} />
                                    <FormHelperText className={this.state.reqUsername}><span className="red">required</span></FormHelperText>
                                </FormControl><br /><br />
                                <FormControl required className="formControl">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                    <FormHelperText className={this.state.reqPassword}><span className="red">required</span></FormHelperText>
                                </FormControl> <br /><br />
                                <FormControl required className="formControl">
                                    <FormHelperText className={this.state.error}><span className="red">Incorrect username and/or password</span></FormHelperText>
                                </FormControl><br /><br />
                                <Button variant="contained" onClick={this.loginButtonHandler} color="primary">
                                    Login
                            </Button>
                            </CardContent>
                        </Card>
                    </div>
                }
            </div>

        )
    }
}

export default Login;