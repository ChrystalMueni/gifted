import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import Navcomponent from "./Navcomponent"

const Signin=()=>{
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const navigate=useNavigate()

    // Function that handles the submitted form
    const submit=async(e)=>{
        // prevent reload when submit is clicked
        e.preventDefault()
        // We update the loading hook
        setLoading("Hang on as we log you in")
        // Try and catch to handle the error incase it occurs when signing in
        try {
            // Prepare our FormData object
            const data=new FormData()
            // Append updated hooks to our object
            data.append("email",email)
            data.append("password",password)

            // We use axios to access request methods POST, GET etc
            // POST requires arguments "url as a string" and "data as a formdata"
            // async allows function submit to pause until there is a response from the api
            // await tells the submit to hold on until it receives the response
            const response= await axios.post("https://chrystalmueni.pythonanywhere.com/api/signin",data)

            // We make a decision based on the api response
            // we are checking if the response has a user
            // if it has a user that means the login was successful and we get redirected to the getproducts component
            if (response.data.user){
                // store the logged in user in the browser
                // localstorage uses the set item function which has two parameters
                //the key as a string and value as a string
                localStorage.setItem("user",JSON.stringify(response.data.user))
                
                navigate("/")

            }else{
                // if the response has no user it means the credentials did not match
                // first we clear the loading hook
                setLoading("")
                //update the error hook with the message from the api
                setError(response.data.message)
            }


        } catch (error) {
            // Clear loading incase there is an error
            setLoading("")
            // update error hook with the error
            setError(error.message)
            
        }
    }
   
    return(
    <div className="signupbg">
        <span className="bg-dark"><Navcomponent/></span>
        <div className="row justify-content-center text-center ">
            <div className="col-md-5 card shadow p-4 mt-5 ">
                <h2>Sign in</h2>
                <form onSubmit={submit}>
                    <span className="text-info">{loading}</span>
                    <span className="text-danger">{error}</span>
                    <input type="email" value={email} className="form-control" placeholder="Enter Email" onChange={(e)=>{setEmail(e.target.value)}} /> <br />
                    <input type="password" value={password} className="form-control" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} /> <br />
                    <button type="submit" className="btn btn-dark w-100">Sign in</button>
                </form>
                <p className="text-muted">Don`t have an account? <Link to={"/signup"} className="text-muted">Sign up</Link></p>
            </div>
        </div>
    </div>
    )
}
export default Signin