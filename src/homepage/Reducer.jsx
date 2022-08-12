import React, {useReducer} from 'react';
import { FcGoogle } from "react-icons/fc";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
        return state +1
        case 'decrement':
        return state -1
        case 'reset':
        return initialState
    
        default:
            return state
    }
}
function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <div> Count -{count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <h3> This is a beer <FcGoogle/></h3>
        </div>
        
    )
}
export default CounterOne