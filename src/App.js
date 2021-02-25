import React from 'react'
import {Link, Route} from 'react-router-dom'
import UserList from './UserList'
import UserShow from './UserShow'
import Home from './Home'
import DisplayPosts from './DisplayPosts' 
import ShowPosts from './ShowPosts'
import styled from 'styled-components'

const Styledh1= styled.h1`
  text-align:center;
`

const Styledp= styled.p`
margin-right:80px;
  display:flex;
  justify-content:right;
  letter-spacing: 2px;
  right:100px;
`

const App=(props)=> {

  return (
    <div>

      <Styledh1>Wlcome to User Blog Application</Styledh1>

      <Styledp>
        <Link to='/'>Home</Link> | 
      <Link to='/users'>Users</Link> | 
      <Link to='/posts'>Posts</Link>
      </Styledp>

      <Route path='/' component={Home} exact={true}/>
      <Route path='/users' component={UserList} exact={true}/> 
      <Route path='/users/:id' component={UserShow} />
      <Route path='/posts' component={DisplayPosts} exact={true}/>
      <Route path='/posts/:id' component={ShowPosts} />

    </div>

  )
}

export default App 