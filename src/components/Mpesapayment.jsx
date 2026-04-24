import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
const Mpesapayment = () => {
 
  const {singleproduct} = useLocation().state || {}
  const imagepath = "http://aaronmbuni.alwaysdata.net/static/images/"

  // declare states here
  const [phone , setphone] = useState("") 

  // 3 states for posting data 
  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  // function to make payment 
  const handlesubmit = async(e)=>{
   e.preventDefault()
   setLoading("Please wait....")

  //  create an empty digital envelope to store data inputs 
  const formdata = new FormData ()
  formdata.append("phone",phone)
  formdata.append("amount",singleproduct.product_cost)
  try {
    const response= await axios.post("http://aaronmbuni.alwaysdata.net/api/mpesa_payment",formdata)

    setSuccess(response.data.message)
    setLoading("")
  } catch (error) {
    setError(error.message)
    setLoading("")
  }
  }

  return (
      
    <div className='row  justify-content-center' >
      <h1 className='text-success'>Make payment-lipa na mpesa</h1>
        <div className="card shadow  col-md-8  p-4">
          {/* image goes here  */}
          <img src={imagepath + singleproduct.product_photo} alt=""  style={{height:"400px",objectFit:"contain"}}/>
             {/* bind the states  */}
          <h2 className='text-info'>{loading}</h2>
            <h2 className='text-success'>{success}</h2>
            <h2 className='text-danger'>{error}</h2>


          <h5 className='text-info  text-start'>{singleproduct.product_name} </h5>
          <p className='text-start'>{singleproduct.product_description} </p>
          <b className='text-warning  text-start'>{singleproduct.product_cost} </b>  <br />
          <form action="" onSubmit={handlesubmit}>
            <input type="number" className="form-control" placeholder='Enter phone 254XXXXXX' onChange={(e)=>setphone(e.target.value)}/> <br />
            <button type='submit' className='btn btn-primary w-100'>Make payment</button>
          </form>
        </div>
    </div>
  )
}

export default Mpesapayment