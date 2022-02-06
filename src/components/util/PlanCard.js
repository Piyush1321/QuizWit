import React from 'react';
import { useState, useEffect } from 'react';

import '../css/PlanCard.css';

function PlanCard(props) {
  const [contains, setContains] = useState([]);
  useEffect(() => {
    setContains(props.contains);
  }, []);
  
  return (
    <div className='plan-card'>
      <div>
          <div className='plan-name'>{props.name}</div>
          <div className='plan-charge'>{props.amount} <i className='fas fa-rupee-sign ml-10'></i></div>
          <div className='plan-includes'>{contains.map((v, key) => {
            return <li key={key}><i className='fas fa-check mr-10 tick'></i> {v}</li>
          })}</div>
      </div>
    </div>
  );
}

export default PlanCard;
