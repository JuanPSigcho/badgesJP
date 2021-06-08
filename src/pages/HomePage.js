import React from 'react';
import astronauts from '../images/astronauts.svg';
import platziconfLogo from '../images/platziconf-logo.svg';
import './styles/HomePage.css';

function HomePage() {
  return (
    <React.Fragment>
      <div className='Home__container'>
        <div className='Home__legend'>
          <img src={platziconfLogo} alt='Platzi Logo' />
          <h2>PRINT YOUR BADGES</h2>
          <h4>The easiest way to manage your conference</h4>
          <button className='btn btn-primary'>Start now</button>
        </div>
        <img src={astronauts} alt='Astronauts logo' />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
