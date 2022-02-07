import React from 'react';
import $ from 'jquery';
import Flash from '../services/Flash';
import './css/ContactUs.css';

function ContactUs() {
  return (
      <div className='contact-us flex-row'>
        <div>
          <form action="">
            <div className="header primary">Contact Us</div>
            <div class="input-block">
              <div class="input-container-floating-bb">
                <input type="text" name='fullName' required/>
                <label>Full Name</label>
                <div class="respose"></div>
              </div>
            </div>
            <div className="input-block">
              <div class="input-container-floating-bb">
                  <input type="email" name='email' required/>
                  <label>Email</label>
                  <div class="respose"></div>
              </div>
            </div>
            <div className="input-block">
              <div class="input-container-floating-bb">
                <input type="number" name='contact' required/>
                <label>Contact</label>
                <div class="respose"></div>
              </div>
            </div>
            <div className="input-block">
              <div class="input-container-floating-bb">
                <textarea name="query" id="" cols="30" rows="10" required></textarea>
                <label>Contact</label>
                <div class="respose"></div>
              </div>
            </div>
          </form>
        </div>
        <div className='flex-full'>

        </div>
      </div>
  );
}

export default ContactUs;
