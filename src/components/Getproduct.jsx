import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'


const Getproduct = () => {
  const navigate = useNavigate()
  const[sortOption, sertsortOption]= useState ("")
  const[search, setsearch]= useState("")

  // declare the states here 
  const [loading, setLoading] = useState ("")
  const [products, setProducts] = useState ([])
  const [error, setError] = useState ("")

  
  // sorting logic
const filtered_products = products.filter((item) => 
  item.product_name.toLowerCase().includes(search.toLowerCase())  ||
  item.product_description.toLowerCase().including(search.toLowerCase())
);

const sorted_product = [...filtered_products].sort((a,b) => {
  if (sortOption === "price_low_high"){
    return a.product_cost - b.product_cost;
  }   

  if (sertsortOption === "price_high_low"){
    return a.product_cost - a.product_cost;
  }

  if (sertsortOption === "name_asc"){
    return a.product_name.localCompare(b.product_name);
  }

  if (sortOption ===  "name_desc") {
    return b.product_name.localCompare(a.product_name); 
  } 
  

  return 0;
});

// const Navigate = useNavigate()
// specify image location URL 
// const img_url= "https://aaronmbuni.alwaysdata.net/static/images/"



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
    <h5 classname="text-center mt-3">Filter & sort products </h5>
    
    <div className="row justify-contet-center mt-3 mb-4">

      {/*search*/}
    <div className="col-md-4 mb-2">
      <input 
        className="form-control"
        type="search"
        placeholder="🔍search product..."
        value={search}
        onChange={(e) => setsearch(e.target.value)}
        />
    </div>

    {/*sort*/}
    <div classname="col-md-4 mb-2">
      <select 
         className="form-control"
         value={sortOption}
         onChange={(e) => sertsortOption(e.target.value)}
         >
           <option value="">Sort Products</option>
      <option value="price_low_high">Price: Low → High</option>
      <option value="price_high_low">Price: High → Low</option>
      <option value="name_asc">Name: A → Z</option>
      <option value="name_desc">Name: Z → A</option>

    </select>
       </div>   
    </div>

    <h1 className='text-primary'>Available products</h1>
    {/* bind the states  */}
    <h2 className='text-warning'>{loading} </h2>
    <h2 className='text-danger'>{error} </h2>
    {/* map the products  */}
    {sorted_product.map(singleproduct=>(
      <div className="col-md-3 md-4 ">
        <div className="card shadow h-100 bg-secondary">
          <img src={imagepath + singleproduct.product_photo} alt=""  style={{height: "200px", width:"230px"}} />
          <div className="card-body">
            <h1 className='text-info'>{singleproduct.product_name} </h1>
            <p>{singleproduct.product_description} </p>
            <b>ksh{singleproduct.product_cost} </b><br />
            <button className="btn btn-info w-100" onClick={()=>navigate("/makepayment",{state : {singleproduct}})} >Purchase now</button>
            <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate("/checkout")}
                >
                  Purchase Now
                </button>
          </div>
        </div>
      </div>
    ))}
 

   </div>
  )
}

export default Getproduct