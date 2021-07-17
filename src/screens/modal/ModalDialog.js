import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Form from './Form';
import EventsForm from './EventsForm';


const ModalDialog = ({ type,open, handleClose,baseUrl }) => {
  return (

    <Dialog open={open} onClose={handleClose}>
       {type === "home" ?
      <Form handleClose={handleClose}  baseUrl={baseUrl}/> :
      <EventsForm handleClose={handleClose}  baseUrl={baseUrl}/>

      }
    </Dialog>
  );
};

export default ModalDialog;