import axios from "axios"
import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import Navcomponent from "./Navcomponent"
import Carouselcomp from "./Carouselcomp"
const Getproducts=()=>{
    // Initialize hooks
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[product,setProduct]=useState([])
    const[search,setSearch]=useState("")

    // navigate hook
    const navigate=useNavigate()

    // Image url
    const img_url="https://chrystalmueni.pythonanywhere.com/static/images/"

    // function to fetch data from api
    const getproducts= async (e) => {

        setLoading("Please wait...")

        try {
            const response=await axios.get("https://chrystalmueni.pythonanywhere.com/api/get_product_details")
            setLoading("")
            setError("")
            setProduct(response.data)
            
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }
        
    }
    useEffect(()=>{getproducts()},[])
    console.log(product)

    const filtered_products=product.filter((item)=>
    item.product_name.toLowerCase().includes(search.toLowerCase())

    
);  
    const user=JSON.parse(localStorage.getItem("user"))
    
    
    return(
        <div className="signupbg">
        <div className="row container-fluid">
           <span className="bg-dark"><Navcomponent/></span>
           <h5 className="text-center text-light pt-2">Welcome back: {user.username}</h5>
           <input type="search" className="form-control text-center m-3 form" placeholder="Search product" value={search} onChange={(e)=> setSearch(e.target.value)}/>
           <span><Carouselcomp/></span>
            <hr />
            <span className="text-info">{loading}</span>
            <span className="text-danger">{error}</span>
            
            <div className="col-md-12 bg-info text-danger">
                <h4>FLASH SALE!! DON`T MISS OUT...Time left is limited</h4>
            </div>
            {filtered_products.map((product)=>(

                
            <div className="col-md-3 justify-content-center-mb-4 column">
                <div className="card shadow text-center mb-3">
                    <img src={img_url+product.product_photo} alt={product.product_name} className="product_img"/>
                    <div className="card-body ">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_description}</p>
                        <b className="text-primary">{product.product_cost}</b> <br /> <br />
                        <button onClick={()=>navigate("/makepayment",{state:{img_url,product}})} className="button p-2">Make payment</button>
                    </div>
                </div>
            </div>
    ))}

       

        </div>
        </div>
        

        
    )
}
export default Getproducts