import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

import Badge from '../components/Badge';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

export default function BadgeDetails(props) {
  const badgeInfo = props.badge;
  return (
    <div>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src={confLogo} alt='Conference Logo' />
            </div>

            <div className='col-6 BadgeDetails__hero-attendant-name'>
              <h1>
                {badgeInfo.firstName}
                {badgeInfo.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge
              firstName={badgeInfo.firstName}
              lastName={badgeInfo.lastName}
              email={badgeInfo.email}
              twitter={'@' + badgeInfo.twitter}
              jobTitle={badgeInfo.jobTitle}
            />
          </div>

          <div className='col'>
            <h2>Actions</h2>
            <div>
              <div>
                <Link
                  className='btn btn-primary'
                  to={`/badges/${badgeInfo.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button
                  className='btn btn-danger mt-4'
                  to={`/badges/${badgeInfo.id}/edit`}
                >
                  Delete
                </button>
                {ReactDOM.createPortal(
                  <h1>Hello, world</h1>,
                  document.getElementById('modal')
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
