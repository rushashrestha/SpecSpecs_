import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../Assets/allproducts'; 
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


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
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); 
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
      {showResults && (
  <div className="search-results">
    {results.length > 0 ? (
      results.map(product => (
        <div
          key={product.id}
          className="search-item"
          onClick={() => handleProductClick(product.id)}
        >
          <img src={product.image} alt="product image" />
          {product.name}
        </div>
      ))
    ) : (
      <div className="no-results">Product not found</div>
    )}
  </div>
)}
    </div>
  );
};

export default SearchBar;