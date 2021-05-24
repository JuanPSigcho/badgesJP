import React from 'react';

import twitterLogo from '../images/twitterLogo.svg';
import './styles/BadgesList.css';
class BadgesList extends React.Component {
  render() {
    return (
      <div className='BadgesList'>
        <ul className='list-unstyled'>
          {this.props.badges.map((badge) => {
            return (
              <li key={badge.id}>
                <div className='BadgesListItem'>
                  <img
                    className='BadgesListItem__avatar'
                    src={badge.avatarUrl}
                  />
                  <div className='BadgeListItem__info'>
                    {badge.firstName} {badge.lastName}
                    <div className='BadgeListItem__twitter'>
                      <img src={twitterLogo}></img>
                      <a href=''>@{badge.twitter}</a>
                    </div>
                    {badge.jobTitle}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
