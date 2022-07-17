import React from "react";
import '../css-t&c.css';

export default function About() {
  return (
    <>
      <div className="container">
        <h1 className="display-4">About Us</h1>
        <p className="display-6">History</p>
        <p>Zuka Store is an online mobile phone buying and selling shop through the website.
          From the explanation above, it is very appropriate if e-commerce/website is applied to the Zuka Store to increase competitiveness.
          Through e-commerce/websites, consumers can more easily get information about company profiles, company locations and cellphone products
          offered by the Zuka Store, both new and second hand cellphone supplies. Through this e-commerce/website, consumers can also find it easier
          to order cellphones without having to come directly to the Zuka Store, because we also provide online services. With this Zuka Store
          can expand its marketing area without having to pay more. Thus it can be an alternative to win the world of competition in business.</p>
      </div>

      <div className="container">
        <br />
        <h1 className="display-6">Team</h1>
        <img src="/profile.png" width="400" className="rounded mx-auto d-block" alt="" />
        <p className="text-center">Cahyo Anggara P</p>
        <br />
        <img src="/profile.png" width="400" className="rounded mx-auto d-block" alt="" />
        <p className="text-center">M Hakim</p>
        <br />
        <img src="/profile.png" width="400" className="rounded mx-auto d-block" alt="" />
        <p className="text-center">Akar Fajar</p>
        <br />
        <img src="/profile.png" width="400" className="rounded mx-auto d-block" alt="" />
        <p className="text-center">Faisal Rianto</p>
        <br />
        <img src="/profile.png" width="400" className="rounded mx-auto d-block" alt="" />
        <p className="text-center">Enggarivansa</p>
      </div>
    </>
  )
}