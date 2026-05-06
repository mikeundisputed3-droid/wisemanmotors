import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  // declare the states here 
  const [ username , setUsername] = useState("")
  const [ email , setEmail] = useState("")
  const [ password , setPassword] = useState("")
  const [ phone , setPhone] =  useState("")

  // define 3 states for posting data 
  const [Loading , setLoading]=useState("")
  const [success , setSuccess]=useState("")
  const[error , setError]=useState("")
  const[strength, setStrength]=useState("")

  // function to signup user
  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("please wait...")

    // create a digital envelope to store user inputs
    // NB:its empty and we need to append (add/attach)
    const formdata = new FormData ()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone",phone)
    try {
      const response=axios.post("http://aaronmbuni.alwaysdata.net/api/signup",formdata)
   
      // update setSuccess 
      setSuccess(response.data.message)
      // update setLoading
      setLoading("")
    } catch (error) {
      setError(error.message)
      setLoading("")
      
    }
  }
  const checkPasswordStrength = (password) => {
  if (password.length < 4) {
    setStrength("Weak");
  } else if (password.length < 8) {
    setStrength("Medium");
  } else {
    setStrength("Strong");
  }
};
  return (
      <div className='row  mt-1 justify-content-center'>
        <div className='col-md-6 card shadow bg-warning'>
          <h1>Signup</h1>
          {/* bind the states  */}
          <h2 className="text-warning"> {Loading} </h2>

          <h2 className='text-success'> {success} </h2>

          <h2 className='text-danger'> {error} </h2>

          <form action="" on onSubmit={handlesubmit}>
            <input type="text" className="form-control" placeholder='Enter username' onChange={(e)=>setUsername(e.target.value) }/> <br />
            <input type="email" className="form-control" placeholder='Enter email'onChange={(e) => setEmail(e.target.value)} /> <br />
            <input type="password" className="form-control" placeholder='Enter password' onChange={(e) => {
                setPassword(e.target.value);
                checkPasswordStrength(e.target.value);
              }}/> <br />
              {password  && (
                <p
                  style={{
                    color:
                        strength === "Weak"
                        ? "red"
                        :strength ==="Medium"
                        ?"orange"
                        :"green",
                  }} 
                  >
                    password Strength : {strength}
                  </p> 
              )}

            <input type="tel" className="form-control" placeholder='Enter phone' onChange={(e) => setPhone(e.target.value)}/> <br />
            <button type='submit'className='btn btn-primary w-100 '>Sign up</button><br />
            <p>Already have an account?
             < Link to="/Signin">Signin</Link> 
             </p>
          </form>
        </div>
      </div>
  )
}

export default Signup