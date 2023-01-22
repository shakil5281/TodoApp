import React, { useState } from 'react'
import { Button, Paper, TextField, Typography } from '@mui/material'
import Table from './Table'
import { useDispatch } from 'react-redux'
import {addTodo} from '../../../redux/store'




const Home = () => {
  const [Name, setName] = useState('')


const dispatch = useDispatch()


const inputHendler = (e)=>{
  dispatch(addTodo(Name))
}


  return (
    <>
      <div className="bg-white w-4/5 mx-auto my-16 p-8">
        <div className="">
          <Typography sx={{margin: '15px 0 '}} variant='h5'>
            My Todo App
          </Typography>
          <div>
            <Paper component={'form'} className='p-4'>
              <TextField 
                value={Name}
                onChange={(e) => setName(e.target.value)}
              sx={{margin: '10px 0 '}} label='Todo Name' fullWidth/>
              <Button 
              onClick={inputHendler}
              variant='contained'>AddTodo</Button>
            </Paper>
          </div>
          <div>
             <Table />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home