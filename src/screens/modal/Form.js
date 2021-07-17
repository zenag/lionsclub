import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose,baseUrl }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bdate, setbdate] = useState('');
  const [contactnumber, setContactNumber] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(password);
    const data={firstName:firstName,lastName:lastName,userName:email,email:email,contactNumber:contactnumber,password:password,dob:bdate,role:role};

    axios.post(baseUrl+"/user/add",data)
    .then(
        res => {

        handleClose();
       window.location.reload(false)
        }
    ).catch();

  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
         label="Contact Number"
         required
         type="number"
         value={contactnumber}
         onChange={e => setContactNumber(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
          label="Role"
          variant="filled"
          required
          value={role}
          onChange={e => setRole(e.target.value)}
       />
       <TextField
          id="date"
          label="Birthday"
          type="date"
          onChange={e => setbdate(e.target.value)}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;