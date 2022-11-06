import React from 'react'
import confLogo from '../images/badge-header.svg'
import Gravatar from './Gravatar'
import './styles/Badge.css'
import { UserContext } from '../Context/UserContexts'

class Badge extends React.Component {
  static contextType = UserContext

  componentDidMount() {
    // this.fetchData()
    const { users, setUsers } = this.context

    // this.intervalId = setInterval(this.fetchData, 5000)
  }

  render() {
    return (
      // <UserContext.Consumer>
      //   {(users) => (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Conference Logo" />
        </div>
        <div className="Badge__section-data">
          <Gravatar className="Badge__avatar" alt="Badge Avatar" email={this.props.email} />
          {/* <img className="Badge__avatar_url" alt="Badge Avatar" src={this.props.avatarUrl} /> */}

          <div className="Badge__section-name">
            <h1>{this.props.firstName}</h1>
            <img
              src={`https://flagcdn.com/40x30/${this.props.countryCode.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/80x60/${this.props.countryCode.toLowerCase()}.png 2x, https://flagcdn.com/120x90/${this.props.countryCode.toLowerCase()}.png 3x`}
              alt="country flag"
            />
          </div>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.twitter} </div>
          <div></div>
        </div>
        <div className="Badge__footer">
          <p>{this.props.meeting}</p>
        </div>
      </div>
      //   )}
      // </UserContext.Consumer>
    )
  }
}

export default Badge
