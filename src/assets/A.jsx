import { useContext, useEffect, useState } from 'react';
import Card from '../Component/Card';
import { Link } from 'react-router-dom';
import { CartContext } from './Pages/CartContext';

function A() {
    const { dispatch } = useContext(CartContext)
    const [data, setData] = useState([]);
    const [addedItemIds, setAddedItemIds] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => setData(json.products));
    }, []);

    const handleAddToCart = (item) => {
        dispatch({ type: 'addtocart', payload: item });
        setAddedItemIds((itemIds) => [...itemIds, item.id]);

        window.setTimeout(() => {
            setAddedItemIds((itemIds) => itemIds.filter((itemId) => itemId !== item.id));
        }, 2200);
    };

    return (
        <div className='container mx-auto'>
            <h2>product list</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
               {data.map((item) => {
    const wasRecentlyAdded = addedItemIds.includes(item.id);

    return (
    <div key={item.id}>
        <Link to={`/details/${item.id}`}>
            <Card url={item.thumbnail} price={item.price} name={item.title} /> 
        </Link>
       
        <button
            className={`w-full py-2 px-4 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition duration-150 ease-in-out ${wasRecentlyAdded ? 'bg-green-600 cursor-default focus:ring-green-500' : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer focus:ring-indigo-500'}`}
            disabled={wasRecentlyAdded}
            onClick={() => handleAddToCart(item)}
        >
            {wasRecentlyAdded ? 'Added to cart' : 'Add to cart'}
        </button>
    </div>
    );
})}
            </div>
        </div>
    );
}

export default A;
