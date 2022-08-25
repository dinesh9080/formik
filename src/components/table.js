import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';



function Sport(){

const navigate=useNavigate()


const handleEdit=({studentname,book,number,email,password,id})=>{
localStorage.setItem("studentname",studentname)
localStorage.setItem("book",book)
localStorage.setItem("number",number)
localStorage.setItem("email",email)
localStorage.setItem("password",password)
localStorage.setItem("id",id)
navigate("/updatedata");
}


const handleDelete = async (id) => {
    await fetch(`https://62ed387ea785760e67675a64.mockapi.io/library/${id}`, {method: 'DELETE'})
    settable(table.filter(data => data.id !== id))
    } 
     







    const [table,settable]=useState([])
    useEffect(()=>{
        fetch("https://62ed387ea785760e67675a64.mockapi.io/library").then((data)=>data.json()).then((data1)=>settable(data1))
    },[])

    return(

        <div>
        
<div className='table heading'>
    <span>libraries content </span>
    <span><Link to='/adddata' style={{textDecoration:"none"}}><Button variant='contained'><AddIcon />&nbsp;Add data</Button></Link></span>

</div>
<div>
    <TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
        <TableRow>
            <TableCell minWidth={40}>Name</TableCell>
            <TableCell >Book</TableCell>
            <TableCell >Number</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Password</TableCell>
            <TableCell >Edit</TableCell>
            <TableCell >Delete</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {table.map((tables)=>(
            <TableRow
            key={tables.id}>
            <TableCell> {tables.studentname}</TableCell>
            <TableCell> {tables.book}</TableCell>
            <TableCell> {tables.number}</TableCell>
            <TableCell> {tables.email}</TableCell>
            <TableCell> {tables.password}</TableCell>
            <TableCell> <Button onClick={()=>handleEdit(tables)}><EditIcon /></Button></TableCell>
            <TableCell> <Button onClick={()=>handleDelete(tables.id)}><DeleteIcon /></Button></TableCell>
    
            </TableRow>  
        )
        )}
      
       
    </TableBody>
    </Table>
</TableContainer>

</div>

</div>
    )
}
export default Sport;