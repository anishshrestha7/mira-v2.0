import React, { useContext } from 'react'
import { CartContext } from './CartContext'

function Cart() {
    let {state, dispatch}=useContext(CartContext)
  return (
    <main className='con py-8 md:px-15'>
        <table className='w-full text-sm text-left'>
            <thead className='border-b border-gray-300'>
                <tr>
                    <th className='py-3 font-medium'>S.no</th>
                    <th className='py-3 font-medium'>Title</th>
                    <th className='py-3 font-medium'>Image</th>
                    <th className='py-3 font-medium'>Quantity</th>
                    <th className='py-3 font-medium'>Action</th>
                </tr>
            </thead>
            <tbody>
                {state.cart.map((item) => (
                    <tr key={item.id} className='border-b border-gray-200'>
                        <td className='py-3'>{item.id}</td>
                        <td className='py-3'>{item.title}</td>
                        <td className='py-3'><img className='h-20 w-20 object-contain' src={item.thumbnail} alt={item.title} /></td>
                        <td className='py-3'>
                            <div className='flex w-fit items-center overflow-hidden rounded border border-gray-300'>
                                <button className='cursor-pointer px-3 py-1 text-lg font-bold leading-none hover:bg-gray-100' aria-label={(item.quantity ?? 1) <= 1 ? `Remove ${item.title} from cart` : `Decrease ${item.title} quantity`} onClick={() => dispatch({ type: 'decrement', payload: item.id })}>
                                    {(item.quantity ?? 1) <= 1 ? <i className='fa-solid fa-trash text-xs' aria-hidden='true'></i> : '−'}
                                </button>
                                <span className='min-w-10 border-x border-gray-300 px-3 py-1 text-center'>{item.quantity ?? 1}</span>
                                <button className='cursor-pointer px-3 py-1 text-lg font-bold leading-none hover:bg-gray-100' aria-label={`Increase ${item.title} quantity`} onClick={() => dispatch({ type: 'increment', payload: item.id })}>+</button>
                            </div>
                        </td>
                        <td className='py-3'>
                            <button className='cursor-pointer text-gray-700 hover:text-gray-500' aria-label={`Remove ${item.title} from cart`} onClick={() => dispatch({ type: 'remove', payload: item.id })}>
                                <i className='fa-solid fa-trash' aria-hidden='true'></i>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </main>
  )
}

export default Cart
