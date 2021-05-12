import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import NavBar from '../components/Navbar';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Badge
                firstName='Juan Pablo'
                lastName='Sigcho'
                jobTitle='FrontEnd Developer Senior'
                twitter='@juanpsyar'
                meeting='#platziconf '
                avatar='https://en.gravatar.com/userimage/204987661/4e576be8d27b3e7c2726d57ca964ff59.png'
              />
            </div>
            <div className='col-6'></div>
            <BadgeForm></BadgeForm>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
