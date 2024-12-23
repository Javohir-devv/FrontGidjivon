import React from 'react'
import '../style/adres.scss'
import rest1 from '../assets/images/slideImg/adress img/rest1.webp'
import rest2 from '../assets/images/slideImg/adress img/rest2.webp'
import { Link } from 'react-router-dom'




const Adressmain = () => {
  return (
    <>
    <div className="container">


    <div className="links">
        <Link  to='/'>
        <p >
        Home

        </p>
        </Link>
         <p> > </p> 
         <Link to='/adress'>
         <p className='select'>
            Adresses
        </p>
        </Link>
    </div>

    <div className="main-flex">
        <div className="left">
            <img src={rest1} alt="" />
            <div className="left-box">
                <div className="title">
                    <h2>Gijduvon Premium Restaurant</h2>
                    <a href="tel:+998914208277"><button>+998-91-420-82-77</button></a>
                </div>
                <div className="adress">
                st. Zulfiyakhanum, 21
                Landmark: Kazakhstan Embassy
                </div>
                 <a href="https://maps.app.goo.gl/jJkV7tLiN4qR6czW6" target='blank'>
                    <button>Route</button>
                    </a>
            </div>
        </div>
        <div className="right">
            <img src={rest2} alt="" />
            <div className="left-box">
                <div className="title">
                    <h2>Gijduvon Premium Restaurant</h2>
                    <a href="tel:+998914208277"><button>+998-91-420-82-77</button></a>
                </div>
                <div className="adress">
                st. Zulfiyakhanum, 21
                Landmark: Kazakhstan Embassy
                </div>
                <a href="https://maps.app.goo.gl/DXhtEPY77KT7wQ7L8" target='blank'> 
                <button>Route</button>
                </a>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Adressmain
