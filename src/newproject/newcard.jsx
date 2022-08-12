import React from 'react'
import {useState, useEffect} from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

function Card() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const searchCards = async (user) => {
    const response = await fetch (`${API_URL}&s=${user}`);
    const data = await response.json();
    console.log(data);
  }
  useEffect (()=>{
    searchCards('Superman');
  }, []);
  return (
    <div>
        <div className='header'>
        <h1>Monster Cards</h1>
        </div>

      <div className='search'>
        <input placeholder='search cards'/>
      </div>
    </div>
   
  )
}

export default Card;