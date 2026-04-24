import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'

const Getproduct = () => {
  const navigate = useNavigate()
  // declare the states here 
  const [loading, setLoading] = useState ("")
  const [products, setProducts] = useState ([])
  const [error, setError] = useState ("")

  // function to get product   
  const getproducts = async ()=>{
    setLoading("Please wait...")
    try {
      const response = await axios.get("http://aaronmbuni.alwaysdata.net/api/getproducts")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError("Something went wrong")
      setLoading("")      
    }
  }
  // call the function
  useEffect(()=>{
    getproducts()
  } , [])
  const imagepath = "http://aaronmbuni.alwaysdata.net/static/images/"
  return (
   <div className="row  bg-warning">
    {/* navnar goes here  */}
    {/* carousel goes here  */}
    <Carousel/>

    <h1 className='text-primary'>Available products</h1>
    {/* bind the states  */}
    <h2 className='text-warning'>{loading} </h2>
    <h2 className='text-danger'>{error} </h2>
    {/* map the products  */}
    {products.map(singleproduct=>(
      <div className="col-md-3 md-4 ">
        <div className="card shadow h-100 bg-secondary">
          <img src={imagepath + singleproduct.product_photo} alt=""  style={{height: "200px", width:"230px"}} />
          <div className="card-body">
            <h1 className='text-info'>{singleproduct.product_name} </h1>
            <p>{singleproduct.product_description} </p>
            <b>ksh{singleproduct.product_cost} </b><br />
            <button className="btn btn-info w-100" onClick={()=>navigate("/makepayment",{state : {singleproduct}})} >Purchase now</button>
          </div>
        </div>
      </div>
    ))}
 

   </div>
  )
}

export default Getproduct