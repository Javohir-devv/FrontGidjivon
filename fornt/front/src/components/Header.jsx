import React, { useState, useEffect } from 'react';
import logo from '../assets/images/gijduvon-premium-logo.webp'; // Logo yo‘li to‘g‘ri ko‘rsatilgan
import '../style/header.scss';
import languages from '../utils/language'; // Til ma'lumotlarini import qilish
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Header({ setLang }) {
  const [lang, setLocalLang] = useState(localStorage.getItem('language') || 'en');
  
  useEffect(() => {
    // Matnlarni dinamik ravishda o'zgartirish
    document.querySelector('.header-text p:nth-of-type(1)').textContent = languages[lang].address;
    document.querySelector('.header-text p:nth-of-type(2)').textContent = languages[lang].location;
    document.querySelector('.header-text p:nth-of-type(3) a').textContent = languages[lang].phone;
  }, [lang]); // Faol holat o'zgarishiga qarab ishlaydi

  return (
    <header>
      <div className="header-flex">
        <img src={logo} alt="Gijduvon Premium Logo" />
        <div className="header-text">
          <div className="">
            <p><a href="#">
            {languages[lang].address}</a></p>
            <p>{languages[lang].location}</p>
            <p><a className='tel' href={`tel:+998914208277`}>{languages[lang].phone}</a></p>
          </div>
          <Link to='/cart'>
          
          <div className="shop">
          <FiShoppingCart />
          </div>
          </Link>
          <div className="lan" onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}>
            <p className='lan-text'>{lang === 'en' ? 'ru' : 'en'}</p>
          </div>
        </div>
      </div>  
    </header>
  );
}

export default Header;
