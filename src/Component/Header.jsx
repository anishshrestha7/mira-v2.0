import React, { useEffect, useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../assets/Pages/CartContext';
import logo from '../assets/logo.webp';

function Header() {
  const { state } = useContext(CartContext); 
  const cartItemCount = state.cart.reduce((total, item) => total + (item.quantity ?? 1), 0);

  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(data => setCategories(data));
  }, []);

  return (
    <header className='sticky top-0 z-50 w-full bg-white py-4'>
      <div className='con flex items-center justify-between md:px-15'>
        <div>
          <Link to="/">
          <img className='w-32' src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="flex gap-6 items-center text-sm font-light">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About us</Link></li>
          
          {categories.slice(1, 6).map((cat) => (
            <li key={cat.slug}>
              <Link to={`/category/${cat.slug}`} className="hover:text-gray-600">
                {cat.name}
              </Link>
            </li>
          ))}

          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Cart" className="inline-flex w-20 tabular-nums">Cart (<span className="mx-1 text-[#E25F19] font-semibold">{cartItemCount}</span>)</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
