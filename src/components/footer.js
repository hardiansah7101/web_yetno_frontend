import React, { useContext } from "react";
import { ContextWebInfo } from "../contexts/context";

export default function Footer() {
  const context = useContext(ContextWebInfo)
  
  return (
    <footer>
      <div className="footer_info">
        <div className="footer_width about">
          <h2>Who We Are</h2>
          <p>
            {context.webInfo?.web_deskripsi}
          </p>
          <div className="social-media">
            <ul>
              <li><a href="https://www.facebook.com/olivia.deska.7"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://www.instagram.com/zuka_storee/"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer_width link">
          <h2>Quick Link</h2>
          <ul>
            <li><a href="zuka footer/aboutus.html">About Us</a></li>
            <li><a href="zuka footer/Term & Condition.html">Terms of Service</a></li>
            <li><a href="zuka footer/Privacy Policy.html">Privacy Policy</a></li>
            <li><a href="zuka footer/faq.html">FAQ</a></li>
          </ul>
        </div>
        <div className="footer_width contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <span><i className="fas fa-map-marker-alt"></i></span>
              <p>
                7 Panembahan, RT50 RW13, Kraton, Daerah Istimewa Yogyakarta
              </p>
            </li>
            <li>
              <span><i className="far fa-envelope"></i></span>
              <a href="#?">Zukastore@gmail.com</a>
            </li>
            <li>
              <span><i className="fas fa-phone-volume"></i></span>
              <a href="#?">111 2222 333</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}