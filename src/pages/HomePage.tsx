import React from 'react';
import ItemGrid from '../components/ItemGrid';
import '../style.css';
import ItemFilters from '../components/ItemFilters';

const HomePage: React.FC = () => {
  return (
    <div className='flex-container'>
      <ItemFilters />
      <ItemGrid />
      <ItemFilters />
    </div>
  );
};

export default HomePage;