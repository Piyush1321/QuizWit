import React from 'react';

import '../components/css/Banner.css'

function Banner() {
  return (
      <div className='main-cover'>
          <div className='cover-content'>
            <div className='tagline-1'>Any successful career starts with a good education.</div>
            <div className='flex-row jc-c mt-20'>
              <button className='cover-btn'><i className='fas fa-play mr-10'></i> Get Started</button>
              <button className='cover-btn ml-20'><i className='fas fa-question mr-10'></i> FAQ</button>
            </div>
            <p className='tagline-2'>Best online learning center.</p>
          </div>
      </div>
  );
}

export default Banner;
