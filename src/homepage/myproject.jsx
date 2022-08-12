import React, {useEffect, useState} from 'react'

function MyHeader() {
    const [pics, setPics] = useState([]);
    const removeImage = (id) => {
        setPics((oldState) => oldState.filter((item) => item.id !==id));
    };
    useEffect(() =>{
        setPics(URL);
    }, []);
    return(
        <div>
            <p>My name is Niyi and i'm a software developer/ engineer, my goal 
               is to make sure i meet my clients time of delivery.
           </p>
           <img src='logo192.png'></img>
           <button onClick={() => pics('delete')}>Delete</button>
       </div>
    )
    

}
export default MyHeader