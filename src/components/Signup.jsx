import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [strength, setStrength] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading("please wait...")
    setError("")
    setSuccess("")

    const formdata = new FormData()
    formdata.append("username", username)
    formdata.append("email", email)
    formdata.append("password", password)
    formdata.append("phone", phone)

    try {
      const response = await axios.post("http://aaronmbuni.alwaysdata.net/api/signup", formdata)
      setSuccess(response?.data?.message || "Signup successful")
      setLoading("")

      const userFromServer = response?.data?.user || null
      const tokenFromServer = response?.data?.token || response?.data?.accessToken || null
      const userToStore = userFromServer || { username, email, phone }

      try {
        localStorage.setItem('user', JSON.stringify(userToStore))
        if (tokenFromServer) localStorage.setItem('token', tokenFromServer)
        // notify navbar and other components in same tab
        window.dispatchEvent(new Event('userChanged'))
      } catch (err) {
        console.error('localStorage error:', err)
      }

      setTimeout(() => navigate("/"), 800)
    } catch (err) {
      console.error(err)
      setError(err?.response?.data?.message || err.message || "Signup failed")
      setLoading("")
    }
  }

  const checkPasswordStrength = (pwd) => {
    if (!pwd) { setStrength(""); return }
    if (pwd.length < 4) setStrength("Weak")
    else if (pwd.length < 8) setStrength("Medium")
    else setStrength("Strong")
  }

  return (
    <div className='row mt-1 justify-content-center'>
      <div className='col-md-6 card shadow bg-warning p-4'>
        <h1>Signup</h1>

        <h2 className="text-warning"> {loading} </h2>
        <h2 className='text-success'> {success} </h2>
        <h2 className='text-danger'> {error} </h2>

        <form onSubmit={handleSubmit}>
          <input type="text" className="form-control" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} required />
          <br />
          <input type="email" className="form-control" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <input type="password" className="form-control" placeholder='Enter password' value={password} onChange={(e) => { setPassword(e.target.value); checkPasswordStrength(e.target.value) }} required />
          <br />
          {password && (<p style={{ color: strength === "Weak" ? "red" : strength === "Medium" ? "orange" : "green" }}>Password strength: {strength}</p>)}
          <input type="tel" className="form-control" placeholder='Enter phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          <br />
          <button type='submit' className='btn btn-primary w-100'>Sign up</button>
          <br />
          <p className="mt-2">Already have an account? <Link to="/Signin">Signin</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Signup