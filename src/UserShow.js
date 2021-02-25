import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const UserShow=(props)=> {
    const [selectedUser, setSelectedUser]= useState({})
    const [posts, setPosts]= useState([])
    const{id}= props.match.params

    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=> {
            const result= response.data
            setSelectedUser(result)
        })
        .catch(err=> {
            alert(err.message) 
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res=> {
            const result1= res.data
            console.log(result1)
            setPosts(result1)
        })
        .catch(err=> {
            alert(err.message)
        })
    }, [id])


    return (
        <div>
            <h1>USER NAME:{selectedUser.name} </h1> <br /> 

           <h2>POSTS WRITTEN BY USER</h2>

          <ol>{
              posts.map((ele)=> {
              return <li key={ele.id}><Link to={`/posts/${id}`}>{ele.title}</Link></li>
              })
              }</ol> 

              <p><Link to='/users/'>back</Link></p>


        </div>
    )
}

export default UserShow