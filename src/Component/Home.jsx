import './House.css'
import { NavLink } from 'react-router-dom'



export default function Home() {
  return (
    <>

      <div className="container-1">

        <div className="cont-1">
          <NavLink to="#"><img src="images/mail.png" width="25px" class="mail" /></NavLink>
          <span>infp@trruoba.com</span>

          <NavLink to="#"><img src="images/phone.png" width="20px" class="telephone" /></NavLink>
          <span>+91 987654321</span>
        </div>

        <div className="cont-2">
          <NavLink to="#"><img src="images/Truoba-logo.png" class="logo" width="190px" /></NavLink>
        </div>

        <div className="cont-3">
          <span>Cart</span>
          <NavLink to="#"><img src="images/basket.png" class="cart" width="40px" /></NavLink>
        </div>

      </div>



      <div className="container-2">
        <div className="cont-1">
          <ul>
            <li>
              <NavLink to="#"><img src="images/fb.webp" width="25px" class="opa1" /></NavLink>
              <NavLink to="#"><img src="images/insta.webp" width="25px" class="opa2" /></NavLink>
              <NavLink to="#"><img src="images/twitter.png" width="25px" class="opa3" /></NavLink>
              <NavLink to="#"><img src="images/pinterest.png" width="25px" class="opa4" /></NavLink>
            </li>
          </ul>
        </div>

        <div className="cont-2">
          <ul>
            <li>
              <NavLink to="#"><p>House Plans</p></NavLink>
              <NavLink to="#"><p>Custom Home</p></NavLink>
              <NavLink to="#"><p>Gallery</p></NavLink>
              <NavLink to="#"><p>Reviews</p></NavLink>
              <span>
                <NavLink to="#"><p>More</p></NavLink><img src="https://static.thenounproject.com/png/2022881-200.png" class="arrow" />
              </span>
              <NavLink to="#"><p>Contact</p></NavLink>
            </li>
          </ul>
        </div>
      </div>


      <div className="house1">


        <NavLink to="http://localhost:3000/home2"><button class="btn2">View House Plan collection</button></NavLink>
      </div>


      <div className="house-image">
        <span>House Design Service</span>

        <div className="cont-house">

          <div className="cont-house1">
            <img src="images/House1.webp" />
            <h2>House Plans</h2>
            <p>Choose from already designed house plans collection</p>
            <NavLink to="http://127.0.0.1:5500/Index2.html"><button class="btn">View House Plans</button></NavLink>
          </div>

          <div className="cont-house1">
            <img src="images/House2.webp" className="house2-img" />
            <h2>Custom Home Design</h2>
            <p>Order a custom home plan — designed specifically for your needs</p>
            <NavLink to="House2.jsx"><button class="btn">View Custom Plans</button></NavLink>
          </div>

        </div>
      </div>


      <div className="click-img">

        <div className="set1">
          <img src="images/House/House1.jpg" width="30px" />
        </div>

        <div className="set2">
          <img src="images/House/House2.jpg" width="30px" />
          <img src="images/House/House3.jpg" width="30px" />
        </div>
      </div>


      <div className="why-go">
            <h1 className="h1-text">Why go with Truoba?</h1>

            <div className="why-all-box">

            <div className="why-go-box">
                <img src="images/House/why-box1.png"  />
                <h2>Fast and convenient</h2>
                <p>All plans can be customized. Receive a quote with updated house plan in just 48 hours.</p>
            </div>

            <div className="why-go-box">
                <img src="images/House/why-box2.webp"  />
                <h2>Style and function</h2>
                <p>Get the most out of every square foot, making your home both efficient and comfortable.</p>
            </div>

            <div className="why-go-box">
                <img src="images/House/why-box3.png"  />
                <h2>Reflect your lifestyle</h2>
                <p>Personalize any modern house plans for your needs with extra rooms or facilities.</p>
            </div>

            <div className="why-go-box">
                <img src="images/House/why-box4.png"  />
                <h2>Continuous support</h2>
                <p>Consult professionals as the house is being built for absolutely free, at any time.</p>
            </div>
        
        </div>
    </div>



    <div className="people-say">

<div className="people-cont">
    <h2>Image Collection</h2>
</div>

<div className="gallery-wrap">
    <img src="images/House/back.png" id="backbtn" />
    <div class="gallery">

        <div>
            <span><img src="images/House/Image1.jpg" /></span>
            <span><img src="images/House/Image2.jpg" /></span>
            <span><img src="images/House/Image3.jpg" /></span>
            
        </div>
        
        <div>
            <span><img src="images/House/New1.jpg" /></span>
            <span><img src="images/House/New2.jpg" /></span>
            <span><img src="images/House/New3.jpg" /></span>  
        </div>

        <div>
            <span><img src="images/House/Image6.jpg" /></span>
            <span><img src="images/House/Image7.jpg" /></span>
            <span><img src="images/House/Image8.jpg" /></span>  
        </div>


    </div>
    <img src="images/House/next.png" id="nextbtn" />
</div>   

</div>


<div className="built-trubos">
        <div className="image-opa">
            <img src="" />
        </div>
        <div className="built-text">
            <h1>BUILT TRUOBAS</h1>
            <p>BUILT TRUOBAS Our built home gallery reflects modern house plans that were customized to make them more personal according to peoples’ preferred style and their individual needs. This was achieved by added rooms, extended spaces, changed roofs, and even applied different siding materials. Each modern house design emphasizes a cozy and welcoming atmosphere for the families to grow and stories to be told.</p>
            <NavLink to="http://127.0.0.1:5500/Index2.html"><button> View gallery</button></NavLink>
        </div>
    </div>


    <div className="customized">

    
<img src="images/House/House5.jpg" class="img" />


<div className="custom-text">
<img src="images/play.png"  />
<h1>Watch the customized Truoba Mini 220 house walk through tour with Levi Kelly
</h1>
<hr/>
<p>New Delhi,BHARAT</p>
</div>

</div>


<div className="popular-text">

<div className="first-text-box">
    <ul>
        <NavLink to="#"><li><span>Popular Searches</span></li></NavLink>
        <NavLink to="#"><li>Custom Home Plans</li></NavLink>
        <NavLink to="#"><li>One Story House Plans</li></NavLink>
        <NavLink to="#"><li>Two Story House Plans</li></NavLink>
        <NavLink to="#"><li>1 Bedroom House Plans</li></NavLink>
        <NavLink to="#"><li>2 Bedroom House Plans</li></NavLink>
        <NavLink to="#"><li>3 Bedroom House Plans</li></NavLink>
        <NavLink to="#"><li>4 Bedroom House Plans</li></NavLink>
        <NavLink to="#"><li>House Plans With Detached Garage</li></NavLink>
        
    </ul>
</div>

<div className="first-text-box">
    <ul>
        <NavLink to="#"><li><span>House Plan Collections</span></li></NavLink>
        <NavLink to="#"><li>Small House Plans</li></NavLink>
        <NavLink to="#"><li>Contemporary House Plans</li></NavLink>
        <NavLink to="#"><li>Modern House Plans</li></NavLink>
        <NavLink to="#"><li>Cabin House Plans</li></NavLink>
        <NavLink to="#"><li>Mid-Century Modern House Plans</li></NavLink>
        <NavLink to="#"><li>Guest House Plans</li></NavLink>
        <NavLink to="#"><li>Simple House Plans</li></NavLink>
        <NavLink to="#"><li>Lake House Plans</li></NavLink>
        
    </ul>
</div> 

 <div className="first-text-box">
    <ul>
        <NavLink to="#"><li><span>House Plans by Size</span></li></NavLink>
        <NavLink to="#"><li>600 sq ft House Plans</li></NavLink>
        <NavLink to="#"><li>800 sq ft House Plans</li></NavLink>
        <NavLink to="#"><li>1000 sq ft House Plans</li></NavLink>
        <NavLink to="#"><li>1200 sq ft House Plans</li></NavLink>
        <NavLink to="#"><li>1500 sq ft House Plans</li></NavLink>
        <NavLink to="#"><li>1800 sq ft House Plans</li></NavLink>
        <NavLink to="#"><li>2000 sq ft House Plans</li></NavLink>
        <NavLink to="#"><li>2500 sq ft House Plans</li></NavLink>
        
        
    </ul> 
</div>

</div>

/*

<div className="question">

<div className="question-image">
    <img src="images/House/House6.jpg" class="ques-img"/>
    <h1>Have a Question?</h1>
    <button className="ques-btn">Ask Us</button>
</div>

<div className="question-answer">
    <h1>Question & Answer</h1>
    <hr/>
    <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"  class="q-a-img"/>
    <p>Which Construction drawing are includedin House Plan Set?</p>
    <hr/>

    <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" class="q-a-img"/>
    <p>Can you design a Custom Home from scratch?</p>
    <hr/>

    <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" class="q-a-img"/>
    <p>Which House Plan Customizations can I make?</p>
    <hr/>

    <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" class="q-a-img"/>
    <p>Is it possible to get interior and exterior 3D image sduring customization process?</p>
    <hr/>

    <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" class="q-a-img"/>
    <p>How much does it cost to make changes to the House Plan?</p>
    <hr/>

    <button className="que-ans-btn">VIEW ALL FAQ</button>
</div>

</div>

 */


<div className="modern-house">
        <h1>Various Modern House Plans</h1>

        <div class="modern-house-plan">
            <p class="first">
                Our wide variety of home floor plans are designed to fit various lot sizes, ensuring you can find the right home design to meet your personal taste. From small house floor plans to modern house floor plans and everything in between, we have a wealth of choices to offer. If you’re planning to build a summer home, our lake house plans are a great choice to ensure you get the rustic feel you want. If you prefer true houses without stairs, our one story house plans deliver plush comfort all on one level, while our two story homes offer additional space on your lot.</p>

                <p>Each modern home designs, whether you choose simple Truba house plans, guest house plans, mid-century modern house plans, or anything in between, is designed by residential architects with extensive knowledge and skills. We understand what aesthetics will look best, and we want everyone to live comfortably in a space that suits their needs and personal tastes. When you purchase our house floor plans online, you’re getting efficiently designed plans that stand the test of time. Additionally, all Trueoba house designs can be customized according to your requirements. If you need to change a roof type, apply different façade materials, or even add a floor, we can make these changes.</p>

                <p class="third">All modern home plans can be customized, according to your specific need. The floor plan can be changed suit your lifestyle. Also, you can change room sizes, add or remove stories, change the roof or add the basement. The house exterior can be changed with a new siding design with your preferred materials and colors. This is your true homes floor plans, so make it exactly as you want!</p>

                <p>We also make it easy for you to buy contemporary house plans online, helping you to save money and get the best deal possible. When you purchase already designed Trouba house construction drawings online, you’ll pay less than you would with custom home design services. Additionally, you save your valuable time. Worried how the home you’ve selected would fit on your land? Email us your lot plan and we’ll draw-up how the home floor plan will look on your site. This service is absolutely free.we can always design a custom house specifically for you, based on your particular needs. Learn more about our Custom Home Plans service here.</p>

            </div>
          
        <div className="ticket-img">
            <img src="images/House/New1.jpg" />
            <img src="images/House/New2.jpg" />
            <img src="images/House/New3.jpg" />
        </div>

            <NavLink to="http://127.0.0.1:5500/Index2.html"><button className="modern-btn">View All House Plans</button></NavLink>
    </div>


    <div className="big-house">
    <img src="images/play2.png" class="big-music"/>
   
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
    <a to="#"><img src="images/payment/upi.webp" /></a>
    <a to="#"><img src="images/payment/visa.png" /></a>
    <a to="#"><img src="images/payment/mastercard.png" /></a>
    <a to="#"><img src="images/payment/american express.png" /></a>
    <a to="#"><img src="images/payment/paypal.png" /></a>
</div>

</div>

</div>



















    </>
  )
}
