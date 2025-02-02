import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../Assets/allproducts'; // Corrected import path
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search filter with debounce
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim()) {
        const filtered = products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setShowResults(true);
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product detail page
    setQuery('');
    setShowResults(false);
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <input
        type="text"
        placeholder="Search spectacles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
      />
      {showResults && results.length > 0 && (
        <div className="search-results">
          {results.map(product => (
            <div
              key={product.id}
              className="search-item"
              onClick={() => handleProductClick(product.id)}
            >
              <img src={product.image} alt="product image" />
              {product.name}
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;