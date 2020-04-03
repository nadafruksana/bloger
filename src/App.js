import React from 'react'
import Home from './Home'
import UsersList from './UsersList'
import Posts from './Posts'
import UserShow from './UserShow'
import PostShow from './PostShow'
import Login from './Login'

import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(props){
    return(
        <BrowserRouter>
    <div>
            <Link to="/">Home</Link>
            <Link to="/users">|Users</Link>
            <Link to="/posts">|Posts</Link>
        
            
            <Route path="/" component={Home} exact={true}/>
            <Route path="/users" component={UsersList} exact={true}/>
            <Route path="/users/:id" component={UserShow} exact={true}/>
            <Route path="/posts" component={Posts} exact={true}/>
            <Route path="/posts/:id" component={PostShow}/>
            <Route path="/login" component={Login}/>
    </div>
        </BrowserRouter>
    )
}
export default App


