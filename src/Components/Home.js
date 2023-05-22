import React from 'react'
import {TextField} from '@mui/material'
import {FormControlLabel, Checkbox} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  
  const [inputs, setInputs] = useState({
    name:'',
    username:'',
    email:'',
    address:'',
    isFeatured:false
  })

  const handleChange = (e)=>{
    setInputs(prevState=>({
      ...prevState, [e.target.name]: e.target.value
    }))
   
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(inputs)
    const sendRequest = async()=>{
      await fetch("https://jsonplaceholder.typicode.com/users", {
        method:"POST",
        headers: {'content-Type':'application/json'},
        body: JSON.stringify({
          name: inputs.name,
          username:inputs.username,
          email: inputs.email,
          address: inputs.address,
          isFeatured: Boolean(inputs.isFeatured)
        })
      }).then((res)=>res.json()).then(()=>navigate('/Products')).catch((error)=>console.log(error))
    }
    sendRequest();
  }

  
  return (
    <div className='home'>
      <form onSubmit={submitHandler} className='form-control'>
      <TextField onChange = {handleChange} value={inputs.name} margin='normal' name="name" id="outlined-basic" label="name" variant="outlined" />
      <TextField onChange = {handleChange}value={inputs.username} margin='normal' name="username" id="outlined-basic" label="username" variant="outlined" />
      <TextField onChange = {handleChange}value={inputs.email} margin='normal' name = "email" id="outlined-basic" label="email" variant="outlined" />
      <TextField onChange = {handleChange}value={inputs.address} margin='normal' name = "address" id="outlined-basic" label="address" variant="outlined" />
       <FormControlLabel control={<Checkbox onChange={(e)=>setInputs(prev=>({...prev, ["isFeatured"]:e.target.checked, }))}value={inputs.isFeatured} name='isFeatured' defaultChecked />} label="Label" />
        <Button  type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}

export default Home