import Navcomponent from "./Navcomponent"
const About=()=>{
    return(
        <div className="aboutbg text-light">
        <span className="bg-dark"><Navcomponent/></span>

            <marquee direction='right'><b><h1 className="text-center pt-5 column ">About Us</h1></b>
            <p className="text-center">Welcome to Gifted Shopping Store, your go-to online marketplace for buying and sellinggift baskests conveniently and securely.</p></marquee> <br /> <br />
            
            <section className="row">
                <div className="col-md-6 bg-dark column">
                    <b><h2 className="whoarewe ms-5 mt-5">Who Are We</h2></b> <br />
                    <p className="whoarewe ms-5">Gifted Shopping Store is an innovative platfrom that connects buyers and sellers, offering a seamless shopping experience. Whether you`re looking for the latest products or unique gift baskets for your home.  Browse our curated collection of thoughtful presents for loved ones, colleagues, or even yourself. Perfectly wrapped and delivered to make every moment special. Dive into a world of creativity and elegance. Surprise someone special with meaningful finds that make memories last forever. Celebrate the art of giving with an exquisite range of handpicked items. Unparalleled convenience meets heartfelt gestures in our online store.Explore an array of premium-quality options tailored to suit every style and sentiment. Whether it's birthdays, anniversaries, or just-because moments, we've got you covered.</p>
                    
                </div>

                <div className="col-md-6">
                    <img src="images/about.jpeg" alt="" height='380x' width='580x' className="ps-5"/>
                </div>
            </section> <br /> <br />



            <section className="row column">
                <div className=" card bg-dark text-light col-md-4">
                    <img src="images/col4.jpg" alt="" /> <br />
                    <b><h4>What we do</h4></b>
                    <p>While our businesses have evolved over the years, one constant is the customer`s desire for low prices, better selection and convenient services</p>
                </div>

                <div className="card bg-dark text-light col-md-4">
                    <img src="images/col2.jpeg" alt="" /> <br />
                    <b><h4>Working at Gifted Store</h4></b>
                    <p>Our workplace is made up of talented, global skilled labourers, who work everyday to create a condusive environment for the customers</p>
                </div>

                <div className="card bg-dark text-light col-md-4">
                    <img src="images/col3.jpeg" alt="" height='286x' /> <br />
                    <b><h4>Newsletters</h4></b>
                    <p>Read on the most recent updates from our shopping store at any time.</p>
                </div>
            </section> <br /> <br />





        </div>
        


    )
} 
export default About