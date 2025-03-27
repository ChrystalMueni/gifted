import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Makepayment = () => {
    const {img_url,product}=useLocation().state||{}
    const[phone,setPhone]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")

    // function for submit
    const submit = async (e)=>{
        e.preventDefault()
        setLoading("Please wait...")

    //prepare data
    const data= new FormData()
    data.append("phone",phone)
    data.append("amount",product.product_cost)

    try {
        const response= await axios.post("https://chrystalmueni.pythonanywhere.com/api/mpesa_payment",data)
        setLoading("")
        setError("")
        setSuccess(response.data.message)
        
    } catch (error) {
        setLoading("")
        setError(error.message)
        
    }
    }

    
  return (
    <div className='container-fluid bg-dark'>
        <Link className="btn btn-success text-light" to={"/"}>Home Page</Link>
        <div className="row justify-content-center mt-3">
            <div className='col-md-5 text-center'>
                <h2 className='text-success text-center'>Lipa na Mpesa</h2>
                <span className='text-success'>{success}</span>
                <span className='text-info'>{loading}</span>
                <span className='text-danger'>{error}</span>
                <div className='card p-3'>
                    <img src={img_url+product.product_photo} alt={product.product_name} className='product_img' />
                    <div className='card-body text-center'>
                        <h4>{product.product_name}</h4>
                        <p className='text-muted'>{product.product_description}</p>
                        <p className='text-success'>{product.product_cost}</p>
                    </div>
                    <div className='card-footer'>
                        <form onSubmit={submit}>
                            <label htmlFor="" className='fs-5 text-primary'>Phone to make payment</label>
                            <input type="tel" required className='form-control' placeholder='254...' value={phone} onChange={(e)=>{setPhone(e.target.value)}} /> <br />
                            <button type='submit' className='btn btn-primary btn-sm button'>Pay now</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default Makepayment