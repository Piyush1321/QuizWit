import React from 'react';
import { Link } from 'react-router-dom';

import '../components/css/Banner.css'

function Banner() {
  return (
      <div className='main-cover'>
          <div className='cover-content'>
            <div className='tagline-1'>Any successful career starts with a good education.</div>
            <div className='flex-row jc-c mt-20'>
              <button id='faq-btn' className='cover-btn mr-20'><i className='fas fa-question mr-10'></i> FAQ</button>
              <Link className='cover-btn mr-20' to='signup'><i className='fas fa-play mr-10'></i> Get Started</Link>
              <button  className='cover-btn view-plans-btn'><i className='fas fa-rupee-sign mr-10'></i> View Plans</button>
            </div>
            <p className='tagline-2'>Best online learning center.</p>
          </div>
      </div>
  );
}

export default Banner;
