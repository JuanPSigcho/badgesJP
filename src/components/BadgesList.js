import React from 'react'
import { Link } from 'react-router-dom'

import twitterLogo from '../images/twitterLogo.svg'
import Gravatar from './Gravatar'
import './styles/BadgesList.css'

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('')
  const [filteredBadges, setFilteredBadges] = React.useState(badges)
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredBadges(result)
  }, [badges, query])

  return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
  const badges = props.badges
  const { query, setQuery, filteredBadges } = useSearchBadges(badges)
  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>Badge don't found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    )
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <div className="BadgesListItem">
                  <Gravatar
                    className="BadgesListItem__avatar"
                    alt="BadgesListItem avatar"
                    email={badge.email}
                  />
                  <div className="BadgeListItem__info">
                    {badge.firstName}
                    <div className="BadgeListItem__twitter">
                      <img src={twitterLogo} alt="Twitter Logo"></img>
                      <a href="./">@{badge.twitter}</a>
                    </div>
                    {badge.jobTitle}
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BadgesList
