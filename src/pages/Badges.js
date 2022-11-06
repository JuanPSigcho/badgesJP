import React from 'react'

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'
import { getUsers } from '../services/getData'
import { UserContext } from '../Context/UserContexts'

class Badges extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    }
  }

  static contextType = UserContext

  componentDidMount() {
    // this.fetchData()
    const { users, setUsers } = this.context
    console.log({ users })
    if (users) {
      if (users.length > 0) {
        this.setState({ loading: false, data: users })
      }
    } else {
      getUsers().then((result) => {
        this.setState({ loading: false, data: result })
        setUsers(result)
      })
    }

    // this.intervalId = setInterval(this.fetchData, 5000)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log({
    //   prevProps: prevProps,
    //   prevState: prevState,
    // });
    // console.log({
    //   props: this.props,
    //   state: this.state,
    // });
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    if (this.state.loading === true && this.state.data === undefined) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" alt="" src={confLogo}></img>
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link className="btn btn-primary" to="/badges/new">
              New badge
            </Link>
          </div>
        </div>
        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data}></BadgesList>
            {this.state.loading && <MiniLoader />}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges
