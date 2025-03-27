import { Link } from "react-router-dom"



const Navcomponent=()=>{


    return (
        <section className="row">
        <div className="col-md-12" >
            {/* <!-- nav tag will carry all the content of the navbar --> */}
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <span><img src="images/carousel/flash1.jpeg" alt="" height="100x" width="200x" className="me"/></span>
            
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- div that will carry all our nav links --> */}
                 <div className="collapse navbar-collapse" id="navbarcollapse">
                    <div class="navbar-nav">
                        <Link to={'/'} className="nav-link active text-light ps-2 ms-5 me-3">Home Page</Link>
                        <Link to={'/signin'} className="nav-link active ps-2 text-light ms-5 me-3">Sign in</Link>
                        <Link to={'/signup'} className="nav-link ps-2 text-light ms-5 me-3">Sign up</Link>
                        <Link to={'/addproduct'} className="nav-link ps-2 text-light ms-5 me-3">Add product</Link>
                        <Link to={"/about"} className="nav-link ps-2 text-light ms-5 me-3">About us </Link>
                        {/* Search input */}
                        {/* <span><input type="search" placeholder="Search product" value={search} onChange={(e)=> setSearch(e.target.value)}/></span> */}
                        <Link to={"/signin"} className="nav-link ps-2 text-warning ms-5 ">Log out </Link>
                        
                    </div>
                 </div>

             </nav>

        </div>

     </section>
    )
}
export default Navcomponent