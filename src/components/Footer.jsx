const Footer=()=>{
    return(
        <section className="row footer mt-5">
        <div className="col-md-4 bg-light text-dark ">
          <div>
            <img src="images/carousel/carousel14.jpeg" alt="" className="imgfooter mt-5 mb-2" />
          </div>
          
        </div>
        




        <div className="col-md-4 bg-light text-dark  me-3">
        <div>
            <h4 className="mt-3">Get updates at any time</h4>
            <input type="email" placeholder="Enter your email address" className="form-control text-center"/>
            <button className="btn btn-dark text-light mt-3">Submit</button> <br /> <br />
    

            
            <h5>Let us know your experience in shopping with us</h5>
            <textarea name="" id="" placeholder="Comments" className="form-control text-center"></textarea>

          </div>
          
        </div>

        

      </section>
      

    )
}
export default Footer