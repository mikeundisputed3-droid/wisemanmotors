import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault()
    setLoading("please wait...")
    setError("")
    setSuccess("")

    const formdata = new FormData()
    formdata.append("email", email)
    formdata.append("password", password)

    try {
      const response = await axios.post("http://aaronmbuni.alwaysdata.net/api/signin", formdata)
      setSuccess(response?.data?.message || "Signed in")

      // store user + token (avoid storing password)
      const userFromServer = response?.data?.user || { email }
      const tokenFromServer = response?.data?.token || response?.data?.accessToken || null

      try {
        localStorage.setItem('user', JSON.stringify(userFromServer))
        if (tokenFromServer) localStorage.setItem('token', tokenFromServer)
        // notify navbar and other components to update immediately
        window.dispatchEvent(new Event('userChanged'))
      } catch (err) {
        console.error("localStorage error:", err)
      }

      setLoading("")
      navigate('/')
    } catch (err) {
      setError(err?.response?.data?.message || err.message || "Signin failed")
      setLoading("")
    }
  }

  return (
    <div className='row justify-content-center mt-2'>
      <div className='col-md-6 card shadow bg-warning p-4'>
        <h1>Signin</h1>
        <h2 className='text-warning'>{loading}</h2>
        <h2 className='text-success'>{success}</h2>
        <h2 className='text-danger'>{error}</h2>

        <form onSubmit={handlesubmit}>
          <input type="email" className='form-control' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input type="password" className='form-control' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <button type='submit' className='btn btn-primary w-100'>Signin</button>
          <br />
          <p>Don't have an account? <Link to="/signup"> Signup</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signin
