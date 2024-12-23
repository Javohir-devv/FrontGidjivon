import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MealMain from '../components/meal'
import { Link } from 'react-router-dom' 




const Meal = () => {
  return (
    <div>
      <Header></Header>
      <div className="link-flex" style={{
        margin:'0 auto',
        width:1440,
        marginTop:170,
      }}>
        <div className="links">
          <Link to='/'>
            <p>Bosh sahifa</p>
          </Link>
          <p> &gt; </p>
          <Link to='/meal'>
            <p className='select'>Meals</p>
          </Link>
     
        </div>
        <a href="/path/to/menu.pdf" download>
          <button>Menuni yuklab olish</button>
        </a>
      </div>
      <MealMain></MealMain>
      <Footer></Footer>
    </div>
  )
}

export default Meal
