import { useContext, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { CartContext } from './CartContext';


function Category() {
  const { categoryId } = useParams();
  const { dispatch } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [addedItemIds, setAddedItemIds] = useState([]);

  const handleAddToCart = (item) => {
    dispatch({ type: 'addtocart', payload: item });
    setAddedItemIds((itemIds) => [...itemIds, item.id]);

    window.setTimeout(() => {
      setAddedItemIds((itemIds) => itemIds.filter((itemId) => itemId !== item.id));
    }, 2200);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${categoryId}`) .then((res) => res.json()) .then((data) => setProducts(data.products))
  }, [categoryId]); 
  return (
   <div className="container mx-auto py-10">
      <h2 className="text-xl ps-5 font-semibold mb-6 ">
        Category Of : {categoryId}
      </h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {products.map((item) => {
          const wasRecentlyAdded = addedItemIds.includes(item.id);

          return (
          <div key={item.id} className='shadow-lg rounded-lg p-4 bg-white transition-transform'>
            <Link to={`/Details/${item.id}`}>
              <img  src={item.thumbnail}  alt={item.title}  className="w-full h-55 object-cover rounded"/>
              <h3 className="font-semibold mt-2">{item.title}</h3>
            </Link>
            <p className="text-gray-800 font-semibold mt-1">${item.price}</p>
            <button
              type='button'
              disabled={wasRecentlyAdded}
              onClick={() => handleAddToCart(item)}
              className={`mt-4 w-full rounded py-2 text-sm font-semibold text-white transition ${wasRecentlyAdded ? 'cursor-default bg-green-600' : 'cursor-pointer bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {wasRecentlyAdded ? 'Added to cart' : 'Add to cart'}
            </button>
          </div>
          );
        })}
      </div>
    </div>
  )
}

export default Category
