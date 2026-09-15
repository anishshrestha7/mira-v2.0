import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

function Cart() {
    let { state, dispatch } = useContext(CartContext)
    const navigate = useNavigate();
    const cartItemCount = state.cart.reduce((total, item) => total + (item.quantity ?? 1), 0);
    const subtotal = state.cart.reduce((total, item) => total + Number(item.price) * (item.quantity ?? 1), 0);

    return (
        <main className='con py-8 md:px-15'>
            <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]'>
            <div className='overflow-x-auto'>
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
                            <td className='py-3'>
                                <p>{item.title}</p>
                                <p className='mt-1 text-xs text-gray-500'>Price: ${(Number(item.price) || 0).toFixed(2)}</p>
                            </td>
                            <td className='py-3'><img className='h-20 w-20 object-contain' src={item.thumbnail} alt={item.title} /></td>
                            <td className='py-3'>
                                <div className='flex w-fit items-center gap-2 overflow-hidden rounded border border-gray-300'>
                                    <button className='flex w-9 cursor-pointer items-center justify-center py-1 text-xl font-bold leading-none' aria-label={(item.quantity ?? 1) <= 1 ? `Remove ${item.title} from cart` : `Decrease ${item.title} quantity`} onClick={() => dispatch({ type: 'decrement', payload: item.id })}>
                                        {(item.quantity ?? 1) <= 1 ? <i className='fa-solid fa-trash text-xs' aria-hidden='true'></i> : '-'}
                                    </button>
                                    <span className='min-w-10 border-x border-gray-300 px-3 py-1 text-center'>{item.quantity ?? 1}</span>
                                    <button className='cursor-pointer px-2 py-1 text-lg font-bold leading-none ' aria-label={`Increase ${item.title} quantity`} onClick={() => dispatch({ type: 'increment', payload: item.id })}>+</button>
                                </div>
                            </td>
                            <td className='py-3'>
                                <button className='cursor-pointer text-gray-700 ' aria-label={`Remove ${item.title} from cart`} onClick={() => dispatch({ type: 'remove', payload: item.id })}>
                                    <i className='fa-solid fa-trash' aria-hidden='true'></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>

            <aside className='h-fit rounded-lg border border-gray-200 bg-gray-50 p-6 lg:translate-x-15'>
                <h2 className='text-lg font-semibold'>Order Summary</h2>
                <p className='mt-1 text-sm text-gray-500'>{cartItemCount} {cartItemCount === 1 ? 'item' : 'items'} in your cart</p>

                <div className='my-5 border-y border-gray-200 py-4'>
                    <div className='flex justify-between text-sm'>
                        <span>Subtotal</span>
                        <span className='font-semibold'>${subtotal.toFixed(2)}</span>
                    </div>
                    <p className='mt-2 text-xs text-gray-500'>Shipping is calculated at checkout.</p>
                </div>

                <button type='button' onClick={() => navigate('/signin')} disabled={state.cart.length === 0} className='w-full rounded bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer'>
                    Proceed to Checkout
                </button>
            </aside>
            </div>
        </main>
    )
}

export default Cart
