import React from "react";
import MarketplaceLayout from "../../layouts/marketplace";
import './Contact.css'

export default function Contact() {
  return (
    <MarketplaceLayout>
      <h4 style={{ marginLeft: '10px', marginTop: '10px' }}>Silakan isi data di bawah ini untuk menghubungi admin</h4> <a href="#?"><b>Zukastore</b></a>.
      <form name="contact-form">
        <div className="formcolumn1">
          <input id="ContactForm1_contact-form-name" name="name" placeholder="Name" size="30" type="text" value="" />
        </div>
        <div className="formcolumn2">
          <input id="ContactForm1_contact-form-email" name="email" placeholder="Email" size="30" type="text" value="" />
        </div>
        <div className="formcolumn3">
          <textarea cols="25" id="ContactForm1_contact-form-email-message" name="email-message" placeholder="Message" rows="7"></textarea>
        </div>
        <div className="formcolumn4" style={{marginBottom: '100px'}}>
          <input id="ContactForm1_contact-form-submit" type="button" value="Send Message" />
        </div>
        <div style={{ maxWidth: '100%', textAlign: 'center', width: '100%' }}>
          <div id="ContactForm1_contact-form-error-message">
          </div>
          <div id="ContactForm1_contact-form-success-message">
          </div>
        </div>
      </form>
    </MarketplaceLayout>
  )
}