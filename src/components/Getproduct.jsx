import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'


const Getproduct = () => {
  const navigate = useNavigate()

  // --- FIXED: consistent state names ---
  const [sortOption, setSortOption] = useState("")
  const [search, setSearch] = useState("")

  // declare the states here 
  const [loading, setLoading] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  // --- ADDED: user state + logout handler (non-invasive) ---
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      if (raw) setUser(JSON.parse(raw));
    } catch (err) {
      setUser(null);
    }
  }, []);

  const handleLogout = () => {
    // remove stored auth info
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    // clear local state and redirect to home page
    setUser(null);
    navigate('/');
  };
  // --- end added code ---

  // sorting logic
  const filtered_products = products.filter((item) =>
    item.product_name?.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description?.toLowerCase().includes(search.toLowerCase())
  );

  const sorted_product = [...filtered_products].sort((a, b) => {
    if (sortOption === "price_low_high") {
      return a.product_cost - b.product_cost;
    }

    if (sortOption === "price_high_low") {
      return b.product_cost - a.product_cost;
    }

    if (sortOption === "name_asc") {
      return (a.product_name || "").localeCompare(b.product_name || "");
    }

    if (sortOption === "name_desc") {
      return (b.product_name || "").localeCompare(a.product_name || "");
    }

    return 0;
  });

  // function to get product   
  const getproducts = async () => {
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
  useEffect(() => {
    getproducts()
  }, [])
  const imagepath = "http://aaronmbuni.alwaysdata.net/static/images/"
  return (
    <div className="row  bg-warning">
      {/* navnar goes here  */}
      {/* carousel goes here  */}
      <Carousel />

      {/* logged-in indicator removed from this page (kept in Navbar) */}

      <h5 className="text-center mt-3">Filter & sort products </h5>

      <div className="row justify-content-center mt-3 mb-4">

        {/*search*/}
        <div className="col-md-4 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="🔍search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/*sort*/}
        <div className="col-md-4 mb-2">
          <select
            className="form-control"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
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
      {sorted_product.map((singleproduct, index) => (
        <div className="col-md-3 md-4 " key={singleproduct.id || singleproduct.product_id || index}>
          <div className="card shadow h-100 bg-secondary">
            <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "200px", width: "230px" }} />
            <div className="card-body">
              <h1 className='text-info'>{singleproduct.product_name}</h1>
              <p>{singleproduct.product_description}</p>
              <b>ksh{singleproduct.product_cost}</b><br />
              <button
                className="btn btn-info w-100"
                onClick={() => navigate("/makepayment", { state: { singleproduct } })}
              >
                Purchase now
              </button>
              {/* second / duplicate button removed */}
            </div>
          </div>
        </div>
      ))}


    </div>
  )
}

export default Getproduct