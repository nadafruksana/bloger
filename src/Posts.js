import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

 class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            //console.log(response)
            const posts = response.data
            this.setState({posts})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        console.log('render') 
        return (
            <div> 
                 <h2>Total Posts {this.state.posts.length}</h2>
                 <ul>
                     {this.state.posts.map(post =>{
                         return <li key={post.id}><Link to={`/posts/${post.id}`}>
                             {post.title}
                             </Link></li>
                     })}
                 </ul>
            </div>
        )
    }
}
export default Posts

