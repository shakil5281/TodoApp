import React from 'react'; 
import { useState } from 'react';
import {Slide,DialogTitle, Button, Dialog, DialogActions, DialogContent, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import {editTodo, revomeTodo, store} from '../../../redux/store'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 

export default function BasicTable() {


  const todo = useSelector((state) => state.todoapp.value)
  const name = todo.map((item)=> item)
  const [open, setOpen] = React.useState(false);
  const [editopen, seteditOpen] = React.useState(false);
  const [value, setvalue] = useState(null)
  const [Name, setName] = useState('')

  const handleClickOpen = (i) => {
    setOpen(true);
    setvalue(i)
  };
   function handleConform(i) {
    setOpen(false);
    store.dispatch(revomeTodo(i))
  }
const edithandleClickOpen =(i) =>{
  seteditOpen(true);
  setvalue(i)
  setName(name[i])
}
const edithandleClose = () =>{
  seteditOpen(false)
}
const editHandleClick = (i) =>{
  seteditOpen(false)
  store.dispatch(editTodo({index: i, task: Name}))
}

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Sl</TableCell>
            <TableCell>Todo List</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {todo.map((item,i) => (
            <TableRow
              key={i.toString()}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{i+1} </TableCell>
              <TableCell component="th" scope="row">
                {item}
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={()=> edithandleClickOpen(i)}>
                  <EditIcon />
                </IconButton>
                </TableCell>
              <TableCell align="left">
                <IconButton onClick={()=> handleClickOpen(i)}>
                    <DeleteIcon />
                </IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle sx={{width: 500}}>{"Delete Conform"}</DialogTitle>
              <DialogContent>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={()=> handleConform(value)}>Agree</Button>
              </DialogActions>
        </Dialog>

        <Dialog open={editopen} onClose={edithandleClose}>
        <DialogTitle>Update Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            sx={{width: '500px'}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={edithandleClose}>Cancel</Button>
          <Button onClick={() => editHandleClick(value)}>Update</Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}


