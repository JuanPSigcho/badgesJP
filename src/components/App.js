import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'
import BadgeEdit from '../pages/BadgeEdit'
import BadgeNew from '../pages/BadgeNews'
import Badges from '../pages/Badges'
import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'
import Layout from './Layout'
import { UserContext } from '../Context/UserContexts'

function App() {
  const [users, setUsers] = React.useState()
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/badges" component={Badges}></Route>
            <Route exact path="/badges/new" component={BadgeNew}></Route>
            <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}></Route>
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
