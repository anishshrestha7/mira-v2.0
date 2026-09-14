import React, { useReducer } from 'react'
let cartReducer=(state,action)=>{
    switch(action.type)
    {
        case 'addtocart': return{cart:[...state.cart,action.payload]}
        case 'remove': return{cart: state.cart.filter(a=>a.id !==action.payload.id)}
    }
}

let products=[{id:1,title:"p1",price:44}, {id:2,title:"p2",price:44}, {id:4,title:"p5",price:44},]
function F() {
    let [state, dispatch]=useReducer(cartReducer,{cart:[]})
  return (
    <div className='grid grid-cols-2'>
        <div>
        <h3>product list</h3>
        {products.map(a=><li>{a.title}<button onClick={()=>dispatch({type: 'addtocart',payload:a})}>Addtocart</button></li>)}
    </div>
    <div>
        <h3>cart list{state.cart.length}</h3>
        {state.cart.map(a=><li>{a.title}<button onClick={()=>dispatch({type: 'remove',payload:a})}>remove</button></li>)}
    </div>
    </div>
  )
}

export default F