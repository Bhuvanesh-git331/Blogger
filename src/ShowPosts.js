import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const ShowPosts=(props)=> {
    const [user, setUser]= useState('')
    const [userPosts, setUserPosts]= useState({})
    const {id}= props.match.params
    const [comments, setComments]= useState([])

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=> {
            const result= res.data
         console.log(result)
            setUserPosts(result)
        })
        .catch(err=> {
            alert(err.message)
        })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res=> {
            const result=res.data
           console.log(result)
            setComments(result)
        })
        .catch(err=> {
            alert(err.message)
        })

    }, [id])

   useEffect(()=> {
       if(userPosts.userId) {
           axios.get(`https://jsonplaceholder.typicode.com/users/${userPosts.userId}`)
           .then(res=>{
            setUser(res.data)
           })
           .catch(err=> {
               alert(err.message)
           })
       }
   }, [userPosts.userId])
   console.log('user', user)

    return (
        <div>

    <h1>USER NAME: {user.name}</h1> <br />

    <h1>TITLE: {userPosts.title}</h1> 

    <h2>Body: </h2>
    <h3>{
         userPosts.body
     }
     </h3>  <hr />

     <h2>COMMENTS</h2>

     <ul>
         {
             comments.map((ele)=> {
             return <li key={ele.id}>{ele.body}</li>   
             })
         }
     </ul> <hr />
     
  <p><Link to={`/users/${user.id}`}>More posts of author: {user.name}</Link> </p>
   

        </div>
    )
}

export default ShowPosts