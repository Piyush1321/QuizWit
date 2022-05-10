import React from 'react';
import Banner from './Banner';

import './css/Home.css';
import Faq from './Faq';
import Plans from './Plans';

function Home() {
  return (
      <>
        <Banner />
        {/* <Plans /> */}
        <Faq />
      </>
  );
}

export default Home;
