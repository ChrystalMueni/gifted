import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import Navcomponent from "./Navcomponent"


const Signup=()=>{
  //Initialize useState
    const[username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")

    //Create a submit function which will be called when one clicks on button type submit
    //We use async to allow our function submit to wait before executing some block of code
    //We passed parameter e-event, on the event that submit is clicked this function is executed
    const submit=async (e)=>{
      //Normally, once the submit has been clicked it reloads the page
      //We use preventDefault to stop the usual behaviour of reloading
      e.preventDefault()
      //We update our loading state when our function has been called
      setLoading("Please wait as we load your data.")

      //We use try and catch where we expect an error so we handle the error
      //The ggod code is under the try block
      //The error is in the catch block
      try {
      
      // We create object formdata and append our updated hooks
      const data=new FormData()
      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)

      // We use axios to post, we need the url and the data to post
      //By use of async we are able to wait for the response from the api before procedding
      const response=await axios.post("https://chrystalmueni.pythonanywhere.com/api/signup",data)
      setLoading("")
      setSuccess(response.data.message)

      // We clear all hooks after successful posting
      setLoading("")
      setEmail("")
      setPhone("")
      setPassword("")
        
      } catch (error) {
        setLoading("")
        setError(error.message)
        
      }
      
    }

    return(
        <div className="signupbg">

            <div className="row justify-content-center   ">
                {/* <nav className="mt-5 md-1 p-3 text-center">
                        <Link className="btn btn-dark me-3" to={"/"}>Home</Link>
                        <Link className="btn btn-dark me-3" to={"/addproduct"}>Add Products</Link>
                        <Link className="btn btn-dark me-3" to={"/signin"}>Sign in</Link>
                        <Link className="btn btn-secondary me-3" to={"/signup"}>Sign up</Link>
                        
                        </nav> */}
                        <span className="bg-dark"><Navcomponent/></span>
                <div className="card shadow p-4 col-md-6 text-center mt-5 ">
                  
                    <h2 className="">Sign up</h2>
                    <form onSubmit={submit} >
                        <span className="text-info">{loading}</span>
                        <span className="text-success">{success}</span>
                        <span className="text-danger">{error}</span>
                        <input type="text" placeholder="Enter Username" required className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>{username} <br />
                        <input type="email" placeholder="Enter Email" required className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> {email} <br />
                        <input type="tel" placeholder="Enter Phone Number" required className="form-control" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/> {phone} <br />
                        <input type="password" placeholder="Password" required className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}} /> {password} <br />
                        <button type="submit" className="btn btn-dark text-light"><Link to={'/'} className="text-light">Sign up</Link></button>
                    </form> <br />
                    <p className="text-muted">Already have an account? <Link to={"/signin"} className="text-muted">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup