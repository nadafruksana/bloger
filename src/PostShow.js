import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            users:[],
            posts:[],
            comment:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const posts=response.data
            this.setState({posts})
            
        })
        .catch((err)=>{
            console.log(err)
        })
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
             console.log(err)
        })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comment=response.data
            this.setState({comment})
        })
        .catch((err)=>{
             console.log(err)
        })
    }
     render(){
        return(
            <div>
            
                <h2>USER NAME:{this.state.users.name}</h2>
                <h2>TITLE: {this.state.posts.title}</h2>
                
                <h2>BODY: <br/>{this.state.posts.body}</h2> <br/>
                <h1>COMMENTS : </h1>
                    <ul>{this.state.comment.map((comments)=>{
                        return <li key={comments.id}>{comments.body}</li>
                    })}
                    </ul>
                    <hr/>

                    <h5><Link to={`/users/${this.state.posts.id}`}>
                        More posts of author - {this.state.users.name}
                    </Link></h5>

            </div>
        )
    }
}
export default PostShow