import { Link } from "react-router-dom"


const Carouselcomp=()=>{
    return(
      <div>
        {/* // <Carousel starts here */}
        <section className="row">
          <div className="col-md-12 justify-content-center">
             <div className="carousel slide justify-content-center" data-bs-ride="carousel" id="mycarousel">
               {/* wrapper of carousel items */}
                 <div className="carousel-inner justify-content-center">
                 <div className="carousel-item active">
                      <img src="images/carousel/carousel10.jpg!bw700" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                 <div className="carousel-item">
                      <img src="images/carousel/carousel13.webp" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                   <div className="carousel-item">
                      <img src="images/carousel/carousel7.jpg" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                   <div className="carousel-item">
                      <img src="images/carousel/carousel8.webp" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                   <div className="carousel-item">
                      <img src="images/carousel/gift3.avif" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                   <div className="carousel-item">
                      <img src="images/carousel/gift4.jpg" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                   
                   <div className="carousel-item">
                      <img src="images/carousel/carousel6.avif" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                   <div className="carousel-item">
                      <img src="images/carousel/carousel14.jpeg" alt="" className="w-100%d-block ps-5" width="1400x"  height="280x"/>
                   </div>
                 </div>


                 <Link to={"#mycarousel"} className="carousel-control-prev" data-bs-slide="prev">
                   <span className="carousel-control-prev-icon bg-muted"></span></Link>
                 <Link to={"#mycarousel"} className="carousel-control-next" data-bs-slide="next">
                   <span className="carousel-control-next-icon bg-muted"></span></Link>
                 
             </div>
          </div>
         </section> <br />
         {/* // End of Carousel */}
         </div>
    )
}
export default Carouselcomp