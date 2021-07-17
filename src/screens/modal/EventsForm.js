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

const EventsForm = ({ handleClose,baseUrl }) => {
  const classes = useStyles();
  // create state variables for each input
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [place, setPlace] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data={title:title,description:description,startdate:startdate,enddate:enddate,place:place};

    axios.post(baseUrl+"/events/add",data)
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
        label="Title"
        variant="filled"
        required
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        label="Description"
        variant="filled"
        required
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <TextField
        label="Start Date"
        type="date"
        required
         InputLabelProps={{
                  shrink: true,
                }}
        onChange={e => setStartDate(e.target.value)}
      />
      <TextField
         label="End Date"
         required
         type="date"
         value={enddate}
          InputLabelProps={{
                   shrink: true,
                 }}
         onChange={e => setEndDate(e.target.value)}
      />
      <TextField
        label="Place"
        variant="filled"
        required
        value={place}
        onChange={e => setPlace(e.target.value)}
      />

      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Add Event
        </Button>
      </div>
    </form>
  );
};

export default EventsForm;