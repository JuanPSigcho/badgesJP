import React from 'react'

import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import { getSpecificUser } from '../services/getData'
import { deleteUser } from '../services/deleteUser'
import { UserContext } from '../Context/UserContexts'

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }
  static contextType = UserContext

  componentDidMount() {
    this.fetchData()
  }

  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false })
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true })
  }

  handleDeleteBadge = async () => {
    this.setState({ loading: true, error: null })
    const { users, setUsers } = this.context
    try {
      const idDeleted = this.props.match.params.badgeId
      let dataUsers = users.filter((dataUser) => dataUser.id.toString() !== idDeleted)
      console.log('data Usera', { dataUsers })
      // await deleteUser(this.props.match.params.badgeId)
      setUsers(dataUsers)
      // updateFunction(users)
      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    try {
      const userID = this.props.match.params.badgeId
      getSpecificUser(userID).then((result) => {
        // const userSingle = result.find((userData) => userData.id == userID)

        this.setState({ loading: false, data: result })
      })
      // this.setState({ loading: false, data: userID })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    const badgeInfo = this.state.data

    return (
      // <UserContext.Consumer>
      //   {(users, setUsers) => (
      <BadgeDetails
        badge={this.state.data}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
      />
      //   )}
      // </UserContext.Consumer>
    )
  }
}

export default BadgeDetailsContainer
