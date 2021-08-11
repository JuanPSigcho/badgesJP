import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link className='btn btn-primary' to='/badges'>
            Start now
          </Link>
        </div>
        <img src={astronauts} alt='Astronauts logo' />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
