import { forwardRef, useCallback, useContext, useEffect, useImperativeHandle, useState } from 'react';
import Card from '../Component/Card';
import { Link } from 'react-router-dom';
import { CartContext } from './Pages/CartContext';

const INITIAL_PRODUCT_COUNT = 32;
const LOAD_MORE_PRODUCT_COUNT = 16;

const A = forwardRef(function A(_, ref) {
    const { dispatch } = useContext(CartContext)
    const [data, setData] = useState([]);
    const [addedItemIds, setAddedItemIds] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMoreProducts, setHasMoreProducts] = useState(true);

    const loadProducts = useCallback(async (skip = 0, limit = LOAD_MORE_PRODUCT_COUNT) => {
        setIsLoading(true);

        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const json = await response.json();

            setData((currentProducts) => skip === 0 ? json.products : [...currentProducts, ...json.products]);
            setHasMoreProducts(skip + json.products.length < json.total);
            return json.products.length > 0;
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadProducts(0, INITIAL_PRODUCT_COUNT);
    }, [loadProducts]);

    const loadMoreProducts = useCallback(() => {
        if (isLoading || !hasMoreProducts) return Promise.resolve(false);

        return loadProducts(data.length, LOAD_MORE_PRODUCT_COUNT);
    }, [data.length, hasMoreProducts, isLoading, loadProducts]);

    useImperativeHandle(ref, () => ({ loadMoreProducts }), [loadMoreProducts]);

    const handleAddToCart = (item) => {
        dispatch({ type: 'addtocart', payload: item });
        setAddedItemIds((itemIds) => [...itemIds, item.id]);

        window.setTimeout(() => {
            setAddedItemIds((itemIds) => itemIds.filter((itemId) => itemId !== item.id));
        }, 2200);
    };

    return (
        <div className='con'>
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
});

export default A;
