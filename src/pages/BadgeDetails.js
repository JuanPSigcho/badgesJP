import React from 'react'

import { Link } from 'react-router-dom'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0)
  if (count > max) {
    setCount(0)
  }
  return [count, setCount]
}

export default function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4)
  const badgeInfo = props.badge
  //let count = 3;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Conference Logo" />
            </div>

            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{badgeInfo.firstName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badgeInfo.firstName}
              email={badgeInfo.email}
              twitter={'@' + badgeInfo.twitter}
              jobTitle={badgeInfo.jobTitle}
              avatarUrl={badgeInfo.avatarUrl}
              countryCode={badgeInfo.countryCode}
            />
          </div>

          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  className="btn btn-primary mr-4"
                  onClick={() => {
                    setCount(count + 1)
                  }}>
                  Increase count: {count}
                </button>
                <Link className="btn btn-primary" to={`/badges/${badgeInfo.id}/edit`}>
                  Edit
                </Link>
              </div>
              <div>
                <button
                  onClick={props.onOpenModal}
                  className="btn btn-danger mt-4"
                  to={`/badges/${badgeInfo.id}/edit`}>
                  Delete
                </button>
                <DeleteBadgeModal
                  onClose={props.onCloseModal}
                  isOpen={props.modalIsOpen}
                  onDeleteBadge={props.onDeleteBadge}></DeleteBadgeModal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
