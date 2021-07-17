import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import './Header.css'
import Modal from 'react-modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Header extends Component {
    constructor(props){
        super();
        this.state ={
            modalIsOpen : false,
            usernameRequired :"dispNone",
            loggedIn:props.loggedIn,
        }
    }

    render(){
        const { data } = this.props;
        return(
            <div>
            <header className="app-header">
            <div className="welcome-user">
                Welcome { this.state.loggedIn? sessionStorage.getItem('username'):""}
            </div>
            </header>

            </div>
        )
    }
    
    
}

export default Header;