import TextField from '@mui/material/TextField';
import * as React from 'react';

import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {useNavigate} from "react-router-dom";




function Goal(){

const formvalidationSchema=yup.object({
    studentname:yup.string().required("Name is Required").min(3,"minimum three values"),
    book:yup.string().required("book is Required").min(3,"minimum three values"),
    number:yup.string().required("number is Required").min(3,"minimum three values"),
    email:yup.string().required("email is Required").min(3,"minimum three values").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address'),
    password:yup.string().required("password is Required").min(3,"minimum three values").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character'),
})




const {handleSubmit, values, handleChange, handleBlur, errors, touched}=useFormik({
    initialValues:{studentname:"",book:"",number:"",email:"",password:""},
    validationSchema: formvalidationSchema,
    onSubmit: (values) =>{postData (values)}
})


const navigate = useNavigate();

const postData = async()=>{
    try{
         await fetch("https://62ed387ea785760e67675a64.mockapi.io/library",{method:"POST",headers:{"Content-Type": "application/json"},
        body:JSON.stringify(values)
       })
    }catch{
        console.log((error)=> error)
 
    }
    navigate("/")
}

    return(
        <>
        <div sx={{marginTop:"50px"}}>adduser</div>
        <div>
        <form onSubmit={handleSubmit}> 
             <TextField label="NAME"  name="studentname" value={values.studentname} onChange={handleChange} onBlur={handleBlur} error={errors.studentname && touched.studentname} helperText={errors.studentname && touched.studentname  ? errors.studentname : "" }   sx={{marginTop:"50px"}}/><br/>
            <TextField label="Book"  name="book" value={values.book} onChange={handleChange} onBlur={handleBlur} error={errors.book && touched.book} helperText={errors.book && touched.book  ? errors.book : "" }  sx={{marginTop:"30px"}}/><br/>
            <TextField label="Number"  name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} error={errors.number && touched.number} helperText={errors.number && touched.number  ? errors.number : "" }  sx={{marginTop:"30px"}}/><br/>
            <TextField label="Email"  name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email && touched.email} helperText={errors.email && touched.email ? errors.email : "" }  sx={{marginTop:"30px"}}/><br/>
            <TextField label="Password"  name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} error={errors.password && touched.password} helperText={errors.password && touched.password  ? errors.password : "" }  sx={{marginTop:"30px"}}/><br/>
            <Button variant="contained"   type='submit' sx={{marginTop:"30px"}}>submit</Button>
            </form>
        </div>
        </>
    )
}
export default Goal;