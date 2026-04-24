import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Signin = () => { 
  // declare the states here 
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

// define the states of posting data 
  const [Loading , setLoading] = useState("")
  const [success ,setSuccess] = useState("")
  const [error , setError ]= useState("")

  // function to signin user 
  const handlesubmit = async (e) =>{
   e.preventDefault()
   setLoading("please wait...")

  //  create a digital envelope to add user input 
  const formdata=new FormData()
  formdata.append("email",email)
  formdata.append("password", password)
  try {
    const response=await axios.post("http://aaronmbuni.alwaysdata.net/api/signin",formdata)
    setSuccess(response.data.message)
    setLoading("")
  } catch (error) {
    setError(error.message)
    setLoading("")
    
  }
  }

  return (
    <div className='row justify-content-center mt-2'>
      <div className='col-md-6 card shadow bg-warning'>
        <h1>Signin</h1>
          {/* bind the states  */}
          <h2 className='text-warning' > {Loading} </h2>
          <h2  className='text-success'> {success} </h2>
          <h2 className='text-danger'> {error} </h2>
        <form action="" onSubmit={handlesubmit}>
          <input type="email"className='form-control'placeholder='Enter username' onChange={(e)=>setEmail(e.target.value)} /> <br />
          <input type="password"className='form-control'placeholder='Enter password'onChange={(e)=>setPassword(e.target.value)} /> <br />
          <button type='submit' className='btn btn-primary w-100'>Signin</button> <br />
          <p>Don't have an account?
            < Link to="/signup">Signup</Link>
          </p>
        </form>

      </div>
    </div>
  )
}

export default Signin
