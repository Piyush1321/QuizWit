import React from 'react';
import $ from 'jquery';
import Flash from '../services/Flash';
import './css/ContactUs.css';

function ContactUs() {

  const contactusReset = () => {
    document.getElementById('contactus-form').reset();
    let responseBlock = document.getElementById('contactus-form').getElementsByClassName('response');
    for(let i=0; i<responseBlock.length; i++) {
        responseBlock[i].innerHTML = '';
    }
}
  return (
      <div className='contact-us flex-row'>
        <div>
          <form id='contactus-form'>
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
                <input type="text" name='subject' required/>
                <label>Subject</label>
                <div class="respose"></div>
              </div>
            </div>
            <div className="input-block">
              <div class="input-container-floating-bb">
                <textarea name="query" rows="5" required></textarea>
                <label>Query</label>
                <div class="respose"></div>
              </div>
            </div>
            <div className='flex-row jc-sb'>
                <div className='btn btn-fade btn-medium' onClick={contactusReset}>Reset</div>
                <button className='btn btn-primary btn-medium'>Send</button>
            </div>
          </form>
        </div>
        <div className='flex-full flex-col jc-c contactus-description'>
          <div>
            <h1 className='m-20'>How can We help?</h1>
            <p className='m-20'>Please Fill out our contact us form.We will reach out to you soon.</p>
          </div>
          <div>
            <h1 className='m-20'>We'd love to hear from you</h1>
            <p className='m-20'>Whether you have a question about features,trials,pricing,demo,or anything else,our team is ready to answer all your questions.</p>
          </div>
          <div>
            <h1 className='m-20'>We are 24x7 available for you. n</h1>
          </div>
        </div> 
      </div>
  );
}

export default ContactUs;
