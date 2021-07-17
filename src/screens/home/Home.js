import React, { Component,useState, useEffect } from 'react';
import moment from 'react-moment'

import TextField from '@material-ui/core/TextField';
import './Home.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../common/header/Header';
import SvgIcon from '@material-ui/core/SvgIcon';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
// Table format
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Menu from '../../common/menu/Menu'
import ModalDialog from '../modal/ModalDialog';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const columns = [
  { id: 'firstName', label: 'FirstName', minWidth: 170 },
  { id: 'lastName', label: 'LastName', minWidth: 100 },
  {
    id: 'email',
    label: 'email',
    minWidth: 170
  },
  {
    id: 'dob',
    label: 'Date of Birth',
    minWidth: 170,
  },
  {
    id: 'actions',
    label: '',
    minWidth: 170,
  },
];

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

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [posts, setPosts] = React.useState([]);
  const headers = {
        'Authorization': 'Bearer '+props.sessionToken,
  };

  useEffect(() => {
       if(sessionStorage.getItem("access_token")){
          axios.get(props.baseUrl+'/users').then(response => setPosts(response.data))
           .catch(err => console.log(err));
       }
  },[])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                 <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                    {column.label}

                  </TableCell>
              ))}
            </TableRow>

          </TableHead>
          <TableBody>
            {posts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                         {column.id == 'actions' ?
                         <div><IconButton onClick={console.log("delete")}>

                              <DeleteIcon color="secondary" />

                              </IconButton>

                                <IconButton onClick={props.openModal}>

                                  <EditIcon color="primary" />

                                  </IconButton>
                                  </div> : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={posts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

class Home extends Component{

    constructor(){
        super();
        this.state = {
            access_token: sessionStorage.getItem("access_token"),
            loggedIn: sessionStorage.getItem("access_token") === "null" ? false : true,
            modalIsOpen : false,
            reload:false

            }
    }
    closeModal =() =>{
            this.setState({modalIsOpen:false})
        }
    openModal =() =>{
            this.setState({modalIsOpen:true})
        }

    render() {

            if(this.state.access_token === null){
                 return <Redirect to='/'  />;
            }
            return(
            <div>
                <Header
                baseUrl={this.props.baseUrl}
                showSearchBox="true"
                profilePic={this.state.profilePic}
                loggedIn={this.state.loggedIn}
                showAccount="true"
                searchChangeHandler={this.onSearchChange}/>
                <div className="flex-container">
                <Menu menulink="home" props={this.props}/>
                <div className="container-block" >
                    <Button variant="contained" color="primary" style={{float:"right"}} onClick={this.openModal.bind()}>
                      Add User
                    </Button>

                     <StickyHeadTable openModal={this.openModal.bind()} baseUrl={this.props.baseUrl} sessionToken={this.state.access_token}/>

                 </div>
                 </div>
                <ModalDialog type="home" open={this.state.modalIsOpen} handleClose={this.closeModal} baseUrl={this.props.baseUrl}/>
            </div>
               )
    }
}

export default Home;