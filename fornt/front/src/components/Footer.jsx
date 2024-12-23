import React, { useState, useEffect } from 'react';
import '../style/footer.scss';
import logo from '../assets/images/gijduvon-premium-logo.webp';
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import languages from '../utils/language'; // Til ma'lumotlarini import qilish
import { Link } from 'react-router-dom';

function Footer({ setLang }) {
  const [lang, setLocalLang] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    // Til o'zgarganda localStorage yangilanadi
    localStorage.setItem('language', lang);
  }, [lang]);

  return (
    <footer>
      <div className="footer-flex">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <div className="icons">
            <ul className="example-2">
              <li className="icon-content">
                <a href="#" aria-label="Facebook" data-social="facebook">
                  <div className="filled"></div>
                  <FaFacebook />
                </a>
                <div className="tooltip">Facebook</div>
              </li>
              <li className="icon-content">
                <a href="#" aria-label="Instagram" data-social="instagram">
                  <div className="filled"></div>
                  <IoLogoInstagram />
                </a>
                <div className="tooltip">Instagram</div>
              </li>
              <li className="icon-content">
                <a
                  href="https://telegram.org/"
                  aria-label="Telegram"
                  data-social="telegram"
                >
                  <div className="filled"></div>
                  <FaTelegram />
                </a>
                <div className="tooltip">Telegram</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mid-text">
          <p>{languages[lang].footerMid}</p>
          <p><a href={`tel:${languages[lang].phone}`}>{languages[lang].phone}</a></p>
        </div>
        <div className="">

        <div className="web-pages">
          <p><Link to="/">{languages[lang].home}</Link></p>
          <p><Link to="/meal">{languages[lang].meals}</Link></p>
          <p><Link to="/adress">{languages[lang].addressmenu}</Link></p>
        </div>
        <div className="location">
            <p>{languages[lang].address}</p>
            <p>{languages[lang].location}</p>

        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
