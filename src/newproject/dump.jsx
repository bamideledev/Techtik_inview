import React from 'react';

function dump (){
const [users, setUsers] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then (res =>{
      setUsers(res.data);
    })
    .catch(err =>{
      console.log(err);
  })
  }, [])
  return (
    <div className='header'>
      <h1>Monster Cards</h1>

      <div className='search'>
        <input placeholder='search cards'/>
      </div>
      <div>
            
                {
                    users.map(post => <h1 key={post.id}>{post.title}</h1>)
                }
            
        </div>
    </div>
  )
}