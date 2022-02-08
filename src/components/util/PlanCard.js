import React from 'react';
import { useState, useEffect } from 'react';

import '../css/PlanCard.css';

function PlanCard(props) {
  const [contains, setContains] = useState([]);
  useEffect(() => {
    setContains(props.contains);
  }, []);
  
  return (
    <a className='plan-card' href=''>
      <div className='plan-name'>{props.name}</div>
      <div>
          <i className='fas fa-rupee-sign card-rupee-sign'></i>
          {/* <div className='bubble-tl'></div> */}
          <div className='bubble-tr'>
            <span>{props.durationInMonths} <br /> {props.durationInMonths > 1 ? 'Months': 'Month' }</span>
          </div>
          <div className='plan-charge'>{props.amount} <i className='fas fa-rupee-sign ml-10'></i></div>
          <div className='plan-duration'></div>
          <div className='plan-includes'>{contains.map((v, key) => {
            return <li key={key} className='flex-row plan-items'>
              <div>
                <i className={'fas ' + (v.type ? 'fa-check ': 'fa-times ') + 'mr-10 ' + (v.type ? 'available': 'not-available')}></i> 
              </div>
              <p>{v.name}</p>
              </li>
          })}</div>
      </div>
    </a>
  );
}

export default PlanCard;
