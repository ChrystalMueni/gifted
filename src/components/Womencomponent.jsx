import axios from "axios"
import { useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import Navcomponent from "./Navcomponent"
import Carouselcomp from "./Carouselcomp"


const Womencomponents=()=>{
    // Initialize hooks
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[product,setProduct]=useState([])

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
    
    
    return(
        <div className="womenbg">
        <div className="row container-fluid">
           <span className="bg-dark"><Navcomponent/></span>
           <span><Carouselcomp/></span>
            <hr />
            <span className="text-info">{loading}</span>
            <span className="text-danger">{error}</span>
            <div className="col-md-12 bg-info text-danger">
                <h4>FLASH SALE!! DON`T MISS OUT...Time left: limited</h4>
            </div>
            {product.map((product)=>(

                
            <div className="col-md-3 justify-content-center-mb-4 ">
                <div className="card shadow text-center mb-3">
                    <img src={img_url+product.product_photo} alt={product.product_name} className="product_img"/>
                    <div className="card-body">
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
export default Womencomponents