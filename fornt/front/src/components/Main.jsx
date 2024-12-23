import React from "react"
import '../style/mainSec.scss'
import imgInformation from '../assets/images/01HRRV3HH8N4KYF9WNWDMEJR5A-webp.webp'
import imgfour from '../assets/images/01HRRX2FC5GKK2RSH4T55MHYMD-webp.webp'
import imgthree from '../assets/images/01HRRX2G2YJJXBS1Y1ZKXYVPM1-webp.webp'
import imgfive from '../assets/images/01HRRX2GRTRZ4QXXG6A6JRDED4-webp.webp'
import shef from '../assets/images/chref.webp'
import shashlik from "../assets/images/shashlik.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Meal from '../components/meal'
import bir from '../assets/images/slideImg/bir.webp'
import ikki from '../assets/images/slideImg/ikki.webp'
import uch from '../assets/images/slideImg/uch.webp'
import tort from '../assets/images/slideImg/to\'rt.webp'
import besh from '../assets/images/slideImg/besh.webp'
import olti from '../assets/images/slideImg/olti.webp'
import yetti from '../assets/images/slideImg/yetti.webp'
import sakkiz from '../assets/images/slideImg/sakkiz.webp'
import { Link } from "react-router-dom"





function Main() {


    return (
        <>
            <main>

                <div className="liner"></div>
                <div className="main-buttons">
               <Link to='/meal'>
               
               <button>Meals</button>
               </Link>     
                    <Link to="/booking"> <button>booking</button></Link>

                </div>
               

                <div className="information">
                    <div className="information-flex">

                    <div className="text">
                        <h2>Welcome!</h2>
                        <p>
                            We are glad to see you at “GIJDUVON PREMIUM” - the first restaurant in uzbekistan with bukhara cuisine. In our restaurant you will meet unique tastes and dishes from the best chef. If our team could find the way to your heart, then we are welcome to you in our restaurant. We work 24 hours a day, seven days a week!

                        </p>
                    </div>
                    <div className="img">
                        <img src={imgInformation} alt="" />
                    </div>
                    </div>
                </div>
                <div className="photos">
                    
<div className="parent">
    <div className="div1">
        <img src={imgInformation} alt="" />
    </div>
    <div className="div2">
        <img src={imgfour} alt="" />
    </div>
    <div className="div3">
        <img src={imgthree} alt="" />
    </div>
    <div className="div4">
        <img src={imgfive} alt="" />
    </div>
</div>
    
                </div>
                <div className="chef">
                    <div className="chef-flex">

                    <div className="chef-photo">
                        <img src={shef} alt="" />
                    </div>
                    <div className="chef-text">
                            <h2>Chef</h2>
                            <p>Abdukholik Nurulloev entered the world of cooking in 2008. After completing two years of training in the art of preparing delicious dishes, he became an assistant chef in one of the cafes in the Sergilinsky district of Tashkent. For three years, he researched and improved other Uzbek national culinary masterpieces.

In 2013, Abdukholik went to Moscow, where he joined the team of the FLORYA restaurant. At the same time, he entered the Academy of Chefs in Moscow and successfully completed his studies in a year and a half.

In 2015, he traveled to Baku, the capital of Azerbaijan, to improve his skills. For three years he worked as a cook in a restaurant located in the city center.

Currently, starting in 2020, Abdukholik is famous for his skill in the premium restaurant "GIJDUVON PREMIUM", where he occupies the honorary position of chef.</p>

                    </div>
                    </div>
                </div>
                <div className="menu">
                    <h1>Appetizing menu</h1>
                    <p>Especially for you, we have developed hearty dishes that are not only incredibly tasty, but also healthy!</p>
                <Meal></Meal>
                </div>
                <div className="slider">

                <Swiper 
                centeredSlides={true}
      spaceBetween={150}
      slidesPerView={5}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 250,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      
      >
      <SwiperSlide>
        <img src={bir} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ikki} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={uch} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={tort} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={besh} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={olti} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={yetti} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sakkiz} alt="" />
      </SwiperSlide>
        
    </Swiper>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11941.187201348579!2d60.57279991581436!3d41.56282062084026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc900742638b5%3A0x80a04b16a05b379b!2sUrganch%20tuman%20IT%20Park!5e0!3m2!1sen!2sus!4v1734340566975!5m2!1sen!2sus" width="100%" style={{
        }}  height="450" allowFullScreen loading="lazy"  referrerPolicy="no-referrer"></iframe>
                
            </main>

        </>
    )
}


export default Main