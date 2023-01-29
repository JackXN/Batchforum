import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);



  return (
    <div className="p-8 pb-12 mb-8 bg-gray-800 rounded-lg shadow-lg thisOne" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='100'>
      <h3 className="pb-4 mb-8 text-xl font-light text-white border-b border-blue-400 font-sourceL">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span className={`cursor-pointer border-blue-400 text-white font-source block ${(index === categories.length - 1) ? 'border-b-0 '  : 'border-b'} pb-3 mb-3` }>{category.name}</span>
        </Link>
        
      ))}
    </div>
  );
};

export default Categories;