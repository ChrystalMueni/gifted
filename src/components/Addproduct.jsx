import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navcomponent from "./Navcomponent"

const Addproduct=()=>{
    // Initialize product details hooks
    const[product_name,setProductName]=useState("")
    const[product_description,setProductDescription]=useState("")
    const[product_cost,setProductCost]=useState("")
    const[product_photo,setProductPhoto]=useState("")

    // hooks for user information
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    const submit= async (e)=>{
        // prevent reloading
        e.preventDefault()
        // update loading hook
        setLoading("Please wait...")
        // prepare our FormData object
        const data=new FormData()
        // append updated hooks
        data.append("product_name",product_name)
        data.append("product_description",product_description)
        data.append("product_cost",product_cost)
        data.append("product_photo",product_photo)

        try {
            // send data to our api
            const response= await axios.post("https://chrystalmueni.pythonanywhere.com/api/add_product",data)

            // updating success hook
            setLoading("")
            setError("")
            setSuccess(response.data.message)
            
         

            // reset our hooks
            setProductName("")
            setProductDescription("")
            setProductCost("")
            setProductPhoto("")


            // catch any server error, internet conc..., server error
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }


    }

    return(
        
       <div className="row justify-content-center mt-4 bg-dark">
        <span className="bg-dark"><Navcomponent/></span>

        <div className="card shadow col-md-6 text-center p-4 mt-3">
        <nav className="mt-5 md-1 p-3 text-center">
                <Link className="btn btn-dark me-3" to={"/"}>Home</Link>
                <Link className="btn btn-secondary me-3" to={"/addproduct"}>Add Products</Link>
                <Link className="btn btn-dark me-3" to={"/signin"}>Sign in</Link>
                <Link className="btn btn-dark me-3" to={"/signup"}>Sign up</Link>
                
            </nav>
            <form onSubmit={submit}>
                <span className="text-info">{loading}</span>
                <span className="text-danger">{error}</span>
                <span className="text-success">{success}</span>
                <input type="text" required placeholder="Product Name" className="form-control" value={product_name} onChange={(e)=>{setProductName(e.target.value)}}/>{product_name} <br />
                <textarea required placeholder="Product Description" className="form-control" name="" id="" value={product_description} onChange={(e)=>{setProductDescription(e.target.value)}}></textarea> {product_description} <br />
                <input required type="number" placeholder="Product Cost" className="form-control" value={product_cost} onChange={(e)=>{setProductCost(e.target.value)}} /> {product_cost} <br />
                <label htmlFor="" className="">Browse/Upload Product Image</label> <br />
                <input required type="file" className="form-control" accept="image/*" onChange={(e)=>{setProductPhoto(e.target.files[0])}}/> <br />
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
       </div>
       
    )
}
export default Addproduct