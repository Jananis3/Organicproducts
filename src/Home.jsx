//Home.jsx
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import './Home.css'


function Home ()
{
return(
    <div className='Home'>

      <div className='Home0'>
      <div className='container'>

</div>
      </div>




      <div className='Home1'>

      <div className='container'>
<div className='row' style={{marginTop :'0px'}}>
  <div className='col-sm-0' style={{marginTop :'100px'}}>
    
  </div>
  <div className='col-sm-4'>
    <img src="left.webp"  width="400" height="400" alt="" style={{marginTop :'0px' , marginleft :'50px'}} />
  </div>
  <div className='col-sm-2' width="350" height="400">
  <b><h2>Organic Products</h2></b>
  Our Farm is a Bio-diverse, Organic ecosystem, certified by ECOCERT 
    and located in the beautiful village of Bhodani in Maharashtra. Our work is inspired by 
    ancient wisdom and sustainability.
</div>

  <div className='col-sm-2'width="1000" height="400" style={{marginTop :'100px'}}>
    <b><h2>WE ARE 4TH GEN FARMERS</h2></b>

    <p className='primary'> </p>
   
   <br></br>
            <button className="btns">
            Read More...
            </button>
  </div>

  <div className='col-sm-4' width="300" height="400">
    <img src="right.webp" alt="" style={{marginTop :'0px'}} />
  </div>
</div>
</div>
      
      </div>

<br></br>
<br></br>
<br></br>
      <div className='Home2'>
      <Carousel>
                <div>
                    <img src="/dp-img2.jpg" />
                </div>
                <div>
                    <img src="/img3.jpg" />
                </div>
                <div>
                    <img src="/dp-img3.jpg" />
                </div>
            </Carousel>
      </div>

      <div className='Home3'>
      <div className='container'>
<div className='row' style={{marginTop :'0px'}}>
  <div className='col-sm-6' style={{marginTop :'200px'}}>
    <h1>Organic Products</h1>
    <p className='primary'> Produce can be called organic if it's certified 
       to have grown on soil that had no prohibited substances applied for three years prior to harvest.
       
       <br></br>


       
       </p>
  
   <br></br>
            <button className="btns">
            Read More...
            </button>
  </div>
  <div className='col-sm-6'>
    <img src="plate.png" width="700" height="400" alt="" style={{marginTop :'100px'}} />
  </div>
</div>
</div>
</div>


<div className='Home3'>
      <div className='container'>
<div className='row' style={{marginTop :'0px'}}>


  <div className='col-sm-6' style={{marginTop :'50px'}}>
    <h2>GHEE MADE FROM YOGHURT (CURD)
</h2>
<h4 className='text-success'>WHY SHOULD YOU BUY THE TBOF CULTURED GHEE?</h4>
<p className='text-primary'>
Pure Desi Gir Cow Ghee made from A2 milk from our own Gir 
cows which are free grazed on the Ecocert certified organic farm.
       <br></br>
       <button className='btns'>
        KNOW MORE 
       </button>
       
       </p>
  </div>
  <div className='col-sm-6'>
    <img src="ghee.webp" width="600" height="400" alt="" style={{marginTop :'0px'}} />
  </div>
  
</div>
</div>


<br></br>





<div className='Home3.5'>
      <div className='container'>
<div className='row' style={{marginTop :'50px'}}>
<div className='col-sm-2'>
    <img src="b1.webp" width="700" height="200" alt="" style={{marginTop :'0px'}} />
  </div>

  <div className='col-sm-6' style={{marginTop :'100px'}}>
   <center><h3 className='text-primary'>THE NATURAL WORLD IS OUR HOME</h3>
       <br></br>
       <button className='btns'>
        KNOW MORE 
       </button>
       
</center>
  </div>

  <div className='col-sm-2'>
    <img src="b1.avif" width="400" height="350" alt="" style={{marginTop :'0px'}} />
  </div>

</div></div>
</div>

<br></br>





<div className='Home44'>
<div className='container'>
<div className='row' style={{marginTop :'50px'}}>
  
  <div className='col-sm-0' style={{marginTop :'50px'}}>
   <center><b><h1>DiWali Special Offers</h1></b></center>
  </div>
  <div className='col-sm-2'>
    <video src="de.mp4"  height="300" width="300" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
    <h4 className='text-default'>
      Diwali Millets Box
    </h4>
    <h2 className='text-info'>
      Rs. 2,291
    </h2>
  </div>
  
  <div className='col-sm-4'>
    <img src="millet.jpg"  height="300" width="300" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
    <button className='btns'>
        Read MORE ... 
       </button>
       
  </div>
  
  <div className='col-sm-2'>
    <video src="de1.mp4" height="300" width="300" alt="" style={{marginTop :'0px'}} />
    <h4 className='text-default'>
      Diwali Grand Laddu 
    </h4>
    <h2 className='text-info'>
      Rs. 2,291
    </h2>
  </div>

  <div className='col-sm-4'>
    <img src="sweet.jpg"  height="300" width="300" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
    <button className='btns'>
        Read MORE ...
       </button>
       
  </div>

</div>
</div>
</div>

<br></br>

<div className='home45'>
<div className='container'>
<div className='row' style={{marginTop :'30px'}}>
<div className='col-sm-8'>
  <h1>Free Shipping All Over India 
    Above 1500</h1>
  </div>
  <div className='col-sm-4'>
  <img src="Fast Delivery.png" width="300" height="50" alt="" style={{marginTop :'0px'}} />
  </div>
</div>
</div></div>



<div className='Home5'>
<div className='container'>
<div className='row' style={{marginTop :'50px'}}>
  <div className='col-sm-0' style={{marginTop :'100px'}}>
  <center><b><h1>YOUR FARM CREATIONS</h1></b></center>
  <div className='col-sm-2'>
    <img src="b1.webp" width="600" height="100" alt="" style={{marginTop :'0px'}} />
  </div>
<br></br>
  </div>
  <div className='col-sm-3'>
    <img src="c1.jpg" width="200" height="300" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
    <b><h4>Khajoor Laddu</h4></b>
    <h3 className='text-success'>
        Rs. 299
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>
       
  </div>
  
  
  <div className='col-sm-3'>
    <img src="c2.webp"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>BreakFast & Snacks</h4></b>
    <h3 className='text-success'>
        Rs. 350
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>
  </div>

  <div className='col-sm-3'>
    <img src="c1.webp"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Bilona A2 Ghee</h4></b>
    <h3 className='text-success'>
        Rs. 500
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>

  </div>

  <div className='col-sm-3'>
    <img src="c2.avif"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Sugarcane Jaggery</h4></b>
    <h3 className='text-success'>
        Rs. 400
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>

  </div>


</div>
</div>
</div>



<div className='Home5'>
<div className='container'>
<div className='row' style={{marginTop :'0px'}}>
  <div className='col-sm-0' style={{marginTop :'100px'}}>
<br></br>
  </div>
  <div className='col-sm-3'>
    <img src="c3.avif" width="200" height="300" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
    <b><h4>Tumeric Powder</h4></b>
    <h3 className='text-success'>
        Rs. 100
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>

  </div>
  
  
  <div className='col-sm-3'>
    <img src="c3.webp"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Kitchen Esssentials</h4></b>
    <h3 className='text-success'>
        Rs. 1000
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>

  </div>

  <div className='col-sm-3'>
    <img src="c5.webp"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Naturral Sweeteners</h4>
    <h3 className='text-success'>
        Rs. 500
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>
</b>
  </div>

  <div className='col-sm-3'>
    <img src="c4.webp"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Healthy Snacking</h4></b>
    <h3 className='text-success'>
        Rs. 350
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>
  </div>


</div>
</div>
</div>


<div className='Home5'>
<div className='container'>
<div className='row' style={{marginTop :'0px'}}>
  <div className='col-sm-0' style={{marginTop :'0px'}}>
<br></br>
  </div>
  <div className='col-sm-3'>
    <img src="pro3.jfif" width="200" height="300" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
    <b><h4>Organic Fruits</h4></b>
    <h3 className='text-success'>
        Rs. 600
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>

  </div>
  
  
  <div className='col-sm-3'>
    <img src="pro5.jfif"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Grains</h4></b>
    <h3 className='text-success'>
        Rs. 1000
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>

  </div>

  <div className='col-sm-3'>
    <img src="pro1.jpg"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Combo Offer</h4>
    <h3 className='text-success'>
        Rs. 500
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>
</b>
  </div>

  <div className='col-sm-3'>
    <img src="pro2.jpg"  width="200" height="300" alt="" style={{marginTop :'0px'}} />
    <b><h4>Millets</h4></b>
    <h3 className='text-success'>
        Rs. 350
    </h3>
    <button className='btns'>
        ADD TO CART
       </button>
  </div>


</div>
</div>
</div>




  
<div className='Home55'>
<div className='container'>
<div className='row' style={{marginTop :'0px'}}>
  <div className='col-sm-0' style={{marginTop :'100px'}}>
 
  </div>
 

  <div className='col-sm-4'>
    <img src=" TestGroup.avif" width="400" height="400" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
  </div>

  <div className='col-sm-4'>
 <h2 className='text-danger'>FOOD HEALTHY</h2>
 <h2 className='text-Success'>Blogs & SPOTLIGHT</h2>
  </div>

  <div className='col-sm-4'>
    <img src="soilright.webp" width="450" height="400" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />

  </div>

</div>
</div>
</div>

<br></br>


<div className='Home6'>
<div className='container'>

  </div>
</div>

<br></br>
<br></br>

<div className='Home6.5'>
<div className='container'>

  </div>
</div>
<br></br>

<div className='Home7'>

</div>

<br></br>
<br></br>

<div className='Home9'>
<div className='container'>
<div className='row' style={{marginTop :'0px'}}>
  <center><h1 className='text-primary'>CERTIFICATIONS</h1></center>


<div className='col-sm-2'>
    <img src="test1.png"  height="200" width="150" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
       
  </div>
  <div className='col-sm-2'>
    <img src="brand1.png"  height="200" width="150" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
       
  </div>
  <div className='col-sm-2'>
    <img src="brand3.png"  height="200" width="150" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
  </div>
  <div className='col-sm-2'>
    <img src="brand2.png"  height="200" width="150" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
  </div>

  <div className='col-sm-2'>
    <img src="brnad4.png"  height="200" width="150" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
  </div>

  <div className='col-sm-2'>
    <img src="test1.png"  height="200" width="150" alt="" style={{marginTop :'0px' , marginleft :'0px'}} />
  </div>


</div>
</div>
</div>


<div className='Home10'>
<div className='container'>
<div className='row' style={{marginTop :'50px'}}>
<div className='col-sm-8'>
  <img src="blog2.png" width="400" height="200" alt="" style={{marginTop :'0px'}} />
  </div>
<div className='col-sm-4'>
  <h1 className='text-success'>Happy Shopping Happy Eating</h1>
  How to Improve Immunity in Kids: Expert Strategies with 10 Food Options

  <h5>In a world filled with potential health challenges, strengthening your child's immune s...</h5>
  </div>
  
</div>
</div>
</div>
<br></br>



<div className='Home8'>
<center>
<div className='col-sm-2'>
  <br></br>
  <br></br>
    <img src="b1.webp" width="250" height="250" alt="" style={{marginTop :'0px'}} />
  </div>
</center>
</div>



<div className='Home12'>
<div className="footer">
<center><p><img src="brand2.png" style={{ margintop:'0px',height:"100px",width:"150px"}}/>
</p></center>


    <center><h1 style={{fontSize:"20px"}} className="my-3">To keep the body in good health is a duty, otherwise we shall not be to keep our mind strong and clear</h1></center>.
<div className="p my-3" style={{display:"flex",fontSize:"11px",justifyContent:"space-evenly",fontWeight:"bold"}}>
   <p><h3 className='text-primary'>Organic Products</h3>
    <h5>11th FLOOR, N-1104, JASMINIUM<br></br>
       BUILDING,MAGARPATTA CITY, <br></br>
       Vellore, TamilNadu, 632001</h5>
       <ul><h5>Email Id</h5><a href="Email: info@organicfoodindia.com">Email: info@organicfoodindia.com</a></ul>

      <ul><h5>phone Number</h5><a href="7406753753">7406753753</a></ul>
      <ul>Grievances: 7406753753</ul>
      </p>
    <p><h5 className='text-default'>The Organic Way of Life Subscribe for <br></br>
    special offers,newsletters and become a
    <br></br> part of our movement</h5>
    <ul>Mobile App</ul>
<ul>Contact Us</ul>
<ul>Whatsapp Us</ul>
<ul>Our Team</ul>
<ul>Corporate Information & Investor relations</ul>
<ul>We are hiring! ⭐️</ul>
      </p>
    
    
    <p> <ul>Sitemap</ul>
<ul>Terms Of Service</ul>
<ul>Refund & Cancellation Policy</ul>
<ul>Privacy Policy</ul>
<ul>Shipping & Delivery Policy</ul>
</p>

    <p><ul>CATEGORIES</ul>

<ul>Bilona A2 Ghee</ul>
<ul>Breakfast & Snacks</ul>
<ul>Kitchen Essentials</ul>
<ul>Natural Sweetners</ul>
<ul>Healthy Snacking</ul></p>
    </div>
    <center>
<div className=''>
    <img src="Fast Delivery.png" width="60" height="50" alt="" style={{marginTop :'0px'}} />
  </div>
  <button className='btns'>
    Order Products
  </button>
  <div className=''>
    <img src="payment.png" width="400" height="100" alt="" style={{marginTop :'0px'}} />
  </div></center>
        </div>

</div>



</div>
</div>

      
      

)
}

export default Home;