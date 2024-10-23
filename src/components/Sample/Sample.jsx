import { count, startAfter } from 'firebase/firestore';
import React, { lazy, useReducer } from 'react'


function reducer(state, action) {
    
    if(action === 'inc') {
        return {
            ...state,
            count: state.count + 1
        }
    } else if(action === 'dec') {
        return {
            ...state,
            count: state.count - 1
        }
    } else if(action === 'green') {
        return {
            ...state,
            color: 'green'
        }
    } else if(action === 'red') {
        return {
            ...state,
            color: 'red'
        }
    }

}
const intialState = {
   count: 0,
   color: 'white'
}
function Sample(props) {
 const [ state, dispach ] = useReducer(reducer, intialState)
    const { onAction } = props;
  return (
    <div>
         <div style={{background: { state.color}}}>
         <button onClick={(e) => dispach('inc')}>
            increament
         </button>
         <p>count: { state.count}</p>
         <button onClick={(e) => dispach('dec')}>
            decreament
         </button>
         </div>
    </div>
  )
}

export default React.memo(Sample, () => {
    return 
})