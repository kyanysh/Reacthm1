import React from 'react'
import Logo from '../assets/Rectangle 50.svg'
import '../firstBlock/first.css'
import Code from '../assets/Heart.svg'
import Host from '../assets/Searchbar.svg'
import Icon from '../assets/Cart.svg'
import Icon_nav from '../assets/suchka.svg'
import AI from '../assets/2563956 1.svg'
import Active from '../assets/Active.svg'
import Elipsie from '../assets/Ellipse 1 (1).svg'
import Elipsie1 from '../assets/Ellipse 1 (1).svg'
import Elipsie2 from '../assets/Ellipse 1 (1).svg'
import Img from '../assets/Group 13 (1).svg'
import Img2 from '../assets/Group 21.svg'
import BI from '../assets/1528 1.svg'
import BE from '../assets/Rectangle 48.svg'
import Arrow from '../assets/arrow right.svg'
import Trophy from '../assets/trophy 1.svg'
import Guarantee from '../assets/guarantee.svg'
import Shipping from '../assets/shipping.svg'
import Customer from '../assets/customer-support.svg'
import Img1 from '../assets/image 1.svg'
import Elip3 from '../assets/Label.svg'
import Table from '../assets/image 2.svg'
import Circle from '../assets/Label.svg'
import Chair from '../assets/image 3.svg'
import Kupon from '../assets/Label (1).svg'
import Ventilator from '../assets/image 4.svg'
import New from '../assets/Label (2).svg'
import Lamp from '../assets/Image 5 (2).svg'
import Krujka from '../assets/image 6.svg'
import Old from '../assets/Label (2).svg'
import Pingky from '../assets/image 7.svg'
import Skidka from '../assets/Label (1).svg'
import Potty from '../assets/image 8.svg'
import Free from '../assets/Label (1).svg'
const Header = () => {
  return (
<header className='header'>
    <div className='section'>
     
        <nav  className='header_nav'>
            <h1 className='header_title'>
                <img src={Logo} alt="" />
            </h1>
            
            
              <p className='menu'>Funiro.</p>
              <p className='menu_item'>Products</p>
              <p className='menu_text'>Rooms</p>
              <p className='menu_box'>Inspirations</p>
           
            <p className='img-p'>
           
            <img src={Host} alt="" />
            </p>
           <p className='Funiro'>
           <img src={Code} alt="" />
           </p>
           <p className='icon_nav'>
            <img src={Icon} alt="" />
           </p>
            <div className="componets">
              <img src={Icon_nav} alt="" />
            </div>
            <p className="aijamal">
        <img src={AI} alt="" />
      </p>
      <p className='cs'>
        <img src= { Active} alt="" />
        <img src={Elipsie}className='roberto' alt="" />
        <img src={Elipsie1}className='alex' alt="" />
        <img src={Elipsie2}className='ronaldo' alt="" />
      </p>
      <div className="photo">
        <img src={Img} alt="" />
        <img src={Img2} alt="" />
      </div>
            <div className="img">
              <img src={BI} alt="" />
              <div className="img-end">
                <img src={BE} alt="" />
              </div>
            </div>
                
        </nav>
    </div>
    <div className="second-block">
      <div className="second-text-block">
        <p>
          High-Quality Furniture Just For You
        </p>
        <div className="second-op-block">
          <p>
          Our furniture is made from selected and best quality materials that are suitable for your dream home
          </p>
          <button className='second-button-block'>Shop Now</button>
        </div>
      </div>
    </div>
    <div className="third-block">
      <div className="third-block-text">
        <p>
          Bohauss
        </p>
        <div className="third-op-block">
          <p>
          Luxury big sofa 2-seat
          </p>
          <div className="third-price-block">
            <p>
            Rp 17.000.000
            </p>
            <div className="third-block-img">
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section2">
     <div className="section2-text">
      <img src={Trophy} alt="" />
      <p className='section2-op-text0'>High Quality</p>
      <p className='section2-op-text'>
        crafted from top materials 
      </p>
     
        <div className="section2-block-text2">
          <img src={Guarantee} alt="" />
          <p className='section2-block-op2'>
            Warrany Protection
          </p>
          <p className='section2-block-end2'>
            Over 2 years
          </p>
          <div className="section2-block3">
            <img src={Shipping} alt="" />
           
              <p className='section2-block3-text3'>
                Free Shipping
              </p>
              <p className='section2-block3-end3'>
                Order Over 150$
              </p>
           
          </div>
        </div>
      </div>
    <div className="section2-block4">
      <img src={Customer} alt="" />
     <div className="section2-block4-text4">
      <p>
        24/7 Support
      </p>
      <p className='section2-block4-end4'>
        Dedicated support
      </p>
     </div>
    </div>
    </div>
    <div className="section3">
  
      <div className="section3-text1">
        
        <div className="section3-block1">
        
          <div className="section3-block1-op1">
            

<div className="section3-block1-img1">
  <img src={Img1} alt=""/>
  <div className="sectio3-block1-img1-assort1">
    <img src={Elip3} alt=""/>
    <div className='section3-block1-text1'>Syltherine</div>
    <div className='section3-op1'>Stylish cafe chair</div>
    <p className='section3-block1-price1'>Rp 2.500.000</p>
  </div>
  
</div>



          </div>
          
        </div>
      </div>
      <div className="section3-text1">
        <p>Our Products</p>
        <div className="section3-block2">
        
          <div className="section3-bloc21-op2">
            

<div className="section3-block2-img2">
  <img src={Table} alt=""/>
  <div className="sectio3-block2-img2-assort2">
    <img src={Circle} alt=""/>
    <div className='section3-block2-text2'>Leviosa</div>
    <div className='section3-op2'>Stylish cafe chair</div>
    <p className='section3-block2-price2'>Rp 2.500.000</p>
  </div>
  
</div>
</div>
</div>
<div className="section3-block3">
        
          <div className="section3-block3-op3">
            

<div className="section3-block3-img3">
  <img src={Chair} alt=""/>
  <div className="sectio3-block2-img2-assort2">
    <img src={Kupon} alt=""/>
    <div className='section3-block3-text3'>Lolito</div>
    <div className='section3-op3'>Luxury big sofa</div>
    <p className='section3-block3-price3'>Rp 7.000.000</p>
  </div>
  
</div>
</div>
</div>
<div className="section3-block4">
        
          <div className="section3-block4-op4">
            

<div className="section3-block4-img4">
  <img src={Ventilator} alt=""/>
  <div className="sectio3-block2-img2-assort2">
    <img src={New} alt=""/>
    <div className='section3-block4-text4'>Respira</div>
    <div className='section3-op4'>Minimalist fan</div>
    <p className='section3-block4-price4'>Rp 500.000</p>
  </div>
  
</div>
</div>
</div>
<div className="section3-block5">
        
          <div className="section3-block4-op4">
            

<div className="section3-block5-img5">
  <img src={Lamp} alt=""/>
  <div className="sectio3-block2-img2-assort2">
    
    <div className='section3-block5-text5'>Grifo</div>
    <div className='section3-op5'>Night lamp</div>
    <p className='section3-block5-price5'>Rp 1.500.000</p>
  </div>
  
</div>
</div>
</div>
<div className="section3-block6">
        
          <div className="section3-block4-op4">
            

<div className="section3-block6-img6">
  <img src={Krujka} alt=""/>
  <div className="sectio3-block2-img2-assort2">
    <img src={Old} alt=""/>
    <div className='section3-block6-text6'>Muggo</div>
    <div className='section3-op6'>Smail mug</div>
    <p className='section3-block6-price6'>Rp 150.000</p>
  </div>
  
</div>
</div>
</div>
<div className="section3-block7">
        
          <div className="section3-block4-op4">
            

<div className="section3-block7-img7">
  <img src={Pingky} alt=""/>
  <div className="sectio3-block2-img2-assort2">
    <img src={Skidka} alt=""/>
    <div className='section3-block7-text7'>Pingky</div>
    <div className='section3-op7'>Cute bed set</div>
    <p className='section3-block7-price7'>Rp 7.000.000</p>
  </div>
  
</div>
</div>
</div>
<div className="section3-block8">
        
          <div className="section3-block4-op4">
            

<div className="section3-block8-img8">
  <img src={Potty} alt=""/>
  <div className="sectio3-block2-img2-assort2">
    <img src={Free} alt=""/>
    <div className='section3-block8-text8'>Potty</div>
    <div className='section3-op8'>Minimalist flower pot</div>
    <p className='section3-block8-price8'>Rp 500.000</p>
  </div>
  <button className='section3-button'>Showe more</button>
</div>
</div>
</div>

    </div>
    
    </div>
    
</header>

  )
}

export default Header;
