import React, { useState } from 'react'
import { FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import NavLogo from '../assets/Image/Nav-logo.png'
import SideCart from './Cart/SideCart';

const Navber = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
     <nav className="bg-white shadow-sm">
        <div className="container">
        <div className="max-w-7xl w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[110px] sm:w-[200px] sm:h-[70px] flex items-center justify-center">
          <img src={NavLogo} alt="Logo"  />

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[18px] font-poppins font-medium text-black">
          <Link to="/" className="hover:text-[#B88E2F]">Home</Link>
          <Link to="/shop" className="hover:text-[#B88E2F]">Shop</Link>
          <Link to="/about" className="hover:text-[#B88E2F]">About</Link>
          <Link to="/contact" className="hover:text-[#B88E2F]">Contact</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-black text-xl">
          <FaUser className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] cursor-pointer hover:text-gray-700" />
          <FiSearch className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] cursor-pointer hover:text-gray-700" />
          <FaHeart className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] cursor-pointer hover:text-gray-700" />
          <FaShoppingCart onClick={()=>setCartOpen(true)} className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] cursor-pointer hover:text-gray-700" />
          {/* Hamburger icon */}
          <div className="md:hidden">
            {mobileMenuOpen ? (
              <FiX onClick={() => setMobileMenuOpen(false)} className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] cursor-pointer" />
            ) : (
              <FiMenu onClick={() => setMobileMenuOpen(true)} className="w-[14px] h-[14px] sm:w-[20px] sm:h-[20px] cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium text-black">
          <Link to="/" className="block hover:text-gray-700">Home</Link>
          <Link to="/shop" className="block hover:text-gray-700">Shop</Link>
          <Link to="/about" className="block hover:text-gray-700">About</Link>
          <Link to="/contact" className="block hover:text-gray-700">Contact</Link>
        </div>
      )}
        </div>
        {
          cartOpen &&
          <SideCart close={()=>setCartOpen(false)}/>

        }
    </nav>   
    </>
  )
}

export default Navber
