import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { cartReducer } from './reducer/cartReducer'
import Products from './Component/Products'
import Cart from './Component/Cart'

const CostCalculator = () => {
    const[state,dispatch] = useReducer(cartReducer,{
        products:[],
        cart:[]
    })
    console.log(state);
    const fetchProducts = async()=>{
        const {data} = await axios.get('https://dummyjson.com/products')
       dispatch({
        type: "ADD_PRODUCTS",
        payload: data.products,
       })
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div style={{display:'flex'}}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default CostCalculator
