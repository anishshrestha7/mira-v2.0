import React, { useEffect, useState, useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../assets/Pages/CartContext';
import logo from '../assets/logo.webp';

function Header() {
  const { state } = useContext(CartContext); 
  const cartItemCount = state.cart.reduce((total, item) => total + (item.quantity ?? 1), 0);

  const [categories, setCategories] = useState([]); 
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(data => setCategories(data));
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='sticky top-0 z-50 w-full bg-white py-4'>
      <div className='con flex items-center justify-between md:px-10 xl:px-15'>
        <div>
          <Link to="/" onClick={closeMenu}>
          <img className='w-28 sm:w-32' src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className="hidden md:flex gap-6 items-center text-sm font-light">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About us</Link></li>
          
          {categories.slice(1, 6).map((cat, i) => {
            const breakpointClass = i === 2 ? 'hidden lg:block' : i >= 3 ? 'hidden xl:block' : '';

            return (
            <li key={cat.slug} className={breakpointClass}>
              <Link to={`/category/${cat.slug}`} className="hover:text-gray-600">
                {cat.name}
              </Link>
            </li>
          );
          })}

          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Cart" className="inline-flex w-20 tabular-nums">Cart (<span className="mx-1 text-[#E25F19] font-semibold">{cartItemCount}</span>)</Link></li>
        </ul>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden cursor-pointer text-2xl"
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden='true'></i>
        </button>
      </div>

      {menuOpen && (
        <nav className="mt-3 border-t border-gray-200 md:hidden">
          <ul className="flex flex-col gap-3 px-6 py-4 text-sm font-light">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/About" onClick={closeMenu}>About us</Link></li>
            {categories.slice(1, 6).map((cat) => (
              <li key={cat.slug}>
                <Link to={`/category/${cat.slug}`} onClick={closeMenu} className="hover:text-gray-600">
                  {cat.name}
                </Link>
              </li>
            ))}
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/Cart" onClick={closeMenu} className="inline-flex tabular-nums">Cart (<span className="mx-1 text-[#E25F19] font-semibold">{cartItemCount}</span>)</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
