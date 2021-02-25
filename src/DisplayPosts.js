import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Styledli=styled.li`
 background: #cce5ff;
  margin: 5px;
  font-size:1rem;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

const DisplayPosts=(props)=> {
    const[posts,setPosts]= useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=> {
            const result= res.data
            console.log('result', result)
            setPosts(result)
        })
    }, [])

    return (
        <div>
         <h2>Total posts by Authors: {posts.length}</h2>

         {
             posts.map((ele)=> {
             return <Styledli type='1' key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></Styledli> 
             }) 
         }
         

        </div>
    )
}

export default DisplayPosts