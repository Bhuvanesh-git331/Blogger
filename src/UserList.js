import React, {useState, useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const UsersList=(props)=>  {
    const [users, setUsers]= useState([])

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            const result= res.data
            setUsers(result)
        })
        .catch(err=> {
            alert(err.message)
        })
    }, [])

return (
    <div>

<h1>Authors List: {users.length}</h1> 

<ul>
{
    users.map((ele)=> {
    return <li type='1' key={ele.id} ><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>   
    })
}

</ul>

<p><Link to='/'>back</Link></p>

    </div>
)
}

export default UsersList