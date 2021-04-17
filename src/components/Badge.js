import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Conference Logo' />
        </div>
        <div className='Badge__section-name'>
          <img
            className='Badge__avatar'
            src='https://en.gravatar.com/userimage/204987661/4e576be8d27b3e7c2726d57ca964ff59.png'
          />
          <h1>Juan P. Sigcho</h1>
        </div>
        <div className='Badge__section-info'>
          <h3>FrontEnd engineer</h3>
          <div>@juanpsyar</div>
        </div>
        <div className='Badge__footer'>
          <p>#platziconf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
