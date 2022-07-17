import React from "react";
import './Faq.css';

export default function Faq() {
  return (
    <>
      <section>
        <div className="container">
          <div className="accordion">
            <div className="accordion-item" id="question1">
              <a className="accordion-link" href="#question1">
                Apakah Zuka Store memberikan garansi untuk produk yang saya beli?
                <i className="icon ion-md-add"></i>
                <i className="icon ion-md-remove"></i>
              </a>
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio hic culpa, quas rem, dolorum fugiat ea architecto illo quae, cumque non officia quibusdam libero sequi repellat minima blanditiis natus.
                </p>
              </div>
            </div>

            <div className="accordion-item" id="question2">
              <a className="accordion-link" href="#question2">
                Apa sajakah ragam kondisi fisik yang terdapat di Zuka Store?
                <i className="icon ion-md-add"></i>
                <i className="icon ion-md-remove"></i>
              </a>
              <div className="answer">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum consectetur modi ipsam ab dignissimos quidem natus iure est vel molestias temporibus harum, ratione, voluptas neque fugiat recusandae. Sequi.
                </p>
              </div>
            </div>

            <div className="accordion-item" id="question3">
              <a className="accordion-link" href="#question3">
                Apakah aksesori ponsel akan disertakan dalam pesanan saya di Zuka Store?
                <i className="icon ion-md-add"></i>
                <i className="icon ion-md-remove"></i>
              </a>
              <div className="answer">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente inventore illum animi debitis tempore, blanditiis asperiores quidem sunt minima eveniet nulla nesciunt veniam amet.
                </p>
              </div>
            </div>

            <div className="accordion-item" id="question4">
              <a className="accordion-link" href="#question4">
                Dapatkah saya menjual ponsel saya ke Zuka Store?
                <i className="icon ion-md-add"></i>
                <i className="icon ion-md-remove"></i>
              </a>
              <div className="answer">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita beatae et quas ad voluptas alias quisquam quod atque a sed aspernatur, hic ipsum. Atque sed sit dicta harum quae tempora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}