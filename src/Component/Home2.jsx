import './House2.css'
import { NavLink } from 'react-router-dom'


export default function Home2() {
  return (
    <>


      <div className="container-1">

        <div className="cont-1">
          <NavLink href="#"><img src="images/mail.png" width="25px" class="mail" /></NavLink>
          <span>infp@trruoba.com</span>

          <NavLink href="#"><img src="images/phone.png" width="20px" class="telephone" /></NavLink>
          <span>+91 987654321</span>
        </div>

        <div className="cont-2">
          <NavLink href="#"><img src="images/Truoba-logo.png" class="logo" width="190px" /></NavLink>
        </div>

        <div className="cont-3">
          <span>Cart</span>
          <NavLink href="#"><img src="images/basket.png" class="cart" width="40px" /></NavLink>
        </div>

      </div>


      <div className="container-2">
        <div className="cont-1">
            <ul>
                <li>
<NavLink href="#"><img src="images/fb.webp" width="25px" class="opa1"/></NavLink>
<NavLink href="#"><img src="images/insta.webp" width="25px" class="opa2"/></NavLink>
<NavLink href="#"><img src="images/twitter.png" width="25px" class="opa3"/></NavLink>
<NavLink href="#"><img src="images/pinterest.png" width="25px" class="opa4"/></NavLink>
                </li>
            </ul>
        </div>

        <div className="cont-2">
            <ul>
                <li>
                    <NavLink href="#"><p>House Plans</p></NavLink>
                    <NavLink href="#"><p>Custom Home</p></NavLink>
                    <NavLink href="#"><p>Gallery</p></NavLink>
                    <NavLink href="#"><p>Reviews</p></NavLink>
                    <span>
                    <NavLink href="#"><p>More</p></NavLink><img src="https://static.thenounproject.com/png/2022881-200.png" class="arrow"/>
                </span>
                    <NavLink href="#"><p>Contact</p></NavLink>
                </li>
            </ul>
        </div>
    </div>




    <div className="container">

<div className="first">
    <h1>House Plan</h1>
    <input type="text" placeholder="Type Here" className="inp"/>
    <button class="btn" onclick="redirect()">Search</button>
</div>

<div className="box">

<div className="box-text">
    <img src="images/House/Big.jpg"class="one"/>
    <h1>Truoba Class</h1>
    <h2>$1500</h2>
    
    <div className="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>294sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>4Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3.5Bath</span>
    </div>
</div>

<div className="box-text">
    <img src="images/House/House1.jpg"class="one1"/>
    <h1>Truoba Class</h1>
    <h2>$2000</h2>
    
    <div className="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>624sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>5Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/House2.jpg"class="one2"/>
    <h1>Truoba Class</h1>
    <h2>$8990</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>694sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>6Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>5Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/House3.jpg"class="one3"/>
    <h1>Truoba Class</h1>
    <h2>$6000</h2>
    
    <div className="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>594sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>5Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/House4.jpg"class="one4"/>
    <h1>Truoba Class</h1>
    <h2>$5800</h2>
    
    <div className="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>694sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>6Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>6.5Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/New1.jpg"class="one5"/>
    <h1>Truoba Class</h1>
    <h2>$7000</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>994sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>7Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>6Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/House6.jpg"class="one6"/>
    <h1>Truoba Class</h1>
    <h2>$8000</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>994sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>8Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>6Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/Image1.jpg"class="one7"/>
    <h1>Truoba Class</h1>
    <h2>$9900</h2>
    
    <div className="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>999sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>6Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>4Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/Image2.jpg"class="one8"/>
    <h1>Truoba Class</h1>
    <h2>$6000</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>294sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>4Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3.5Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/Image3.jpg"class="one9"/>
    <h1>Truoba Class</h1>
    <h2>$9000</h2>
    
    <div className="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>594sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>4Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3.5Bath</span>
    </div>
</div>

<div className="box-text">
    <img src="images/House/Image5.jpg"class="one11"/>
    <h1>Truoba Class</h1>
    <h2>$1500</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>294sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>4Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3.5Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/Image6.jpg"class="one12"/>
    <h1>Truoba Class</h1>
    <h2>$1500</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>294sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>4Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3.5Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/new3.jpg"class="one13"/>
    <h1>Truoba Class</h1>
    <h2>$1500</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>284sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>3Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/Image8.jpg"class="one13"/>
    <h1>Truoba Class</h1>
    <h2>$1500</h2>
    
    <div class="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>284sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>3Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3Bath</span>
    </div>
</div>
<div className="box-text">
    <img src="images/House/Image7.jpg"class="one13"/>
    <h1>Truoba Class</h1>
    <h2>$1500</h2>
    
    <div className="detail">
        <img src="images/House/detail1.webp" width="15px"/>
        <span>284sqfte</span>
        <img src="images/House/detail2.png" width="15px"/>
        <span>3Bed</span>
        <img src="images/House/detail3.webp" width="15px"/>
        <span>3Bath</span>
    </div>
</div>


</div>

<div className="last">
<p>All modern house plans are fully customizable, ensuring you get exactly what you’re looking for. You can easily change the house floor plan layout, extend spaces, add or remove rooms altogether, add a story, change the roof type, add a basement, and more. You can also change the façade of the house to a different style, as well as change the materials and colors to create the exterior of your dreams. Our houses are characterized by clean, simple lines and emphasizing function over form, and unique use of façade materials. Houses often feature open floor plans, large windows, and an indoor-outdoor connection. They also include elements such as low slope roofs, horizontal lines, and asymmetrical shapes. The common house features include a focus on sustainable design, the use of natural light, and the incorporation of outdoor living spaces. If you feel you would like a more distinctive house plans that would be more personal to you, and would better fit your needs, we can always design a custom home for you. Learn more about our Custom Home Plans here.</p>
</div>

</div>



<div className="head">

<div className="header">
    
    <div className="header-one">
    <img src="images/telephone.png" class="header-one-img"/>
    <h2>Call Us</h2>
    </div>

    <div className="header-two">
    <img src="images/emails.webp" class="header-two-img"/>
    <h2>Email</h2>
</div>

<div className="header-three">
    <p>See our 93 reviews on </p>
    <img src="https://icons.veryicon.com/png/o/miscellaneous/icheyong/star-rating-3.png" class="only-one"/>
    <img src="https://static.vecteezy.com/system/resources/previews/019/859/727/non_2x/five-stars-quality-rating-icons-5-stars-icon-five-star-sign-rating-symbol-transparent-background-illustration-png.png" class="header-three-img"/>
    <p className="view">View Reviews</p>

    <div className="profile">
        <img src="images/linkedin.png" />
        <img src="images/facebook.png"/>
        <img src="images/twitters.png" />
        <img src="images/instagram.png" />
    </div>
    </div>

    <div className="header-four">
    
    <h2>Subscribe to newsletter</h2>
    <p>Get special offers and updates for house design and construction.</p>
    <input type="text" placeholder="Email" />
    <button className="sub-btn">Subscribe</button>
    </div>
</div>
    
    <span>FAQ</span>
    <span>Terms and Conditions</span>
    <span>Privacy Policy</span>

<div class="last">
    <p>Copyright 2023 © Truoba</p>

    <div class="payment">
    <a href="#"><img src="images/payment/upi.webp" /></a>
    <a href="#"><img src="images/payment/visa.png" /></a>
    <a href="#"><img src="images/payment/mastercard.png" /></a>
    <a href="#"><img src="images/payment/american express.png" /></a>
    <a href="#"><img src="images/payment/paypal.png" /></a>
</div>

</div>

</div>




    </>
  )
}
