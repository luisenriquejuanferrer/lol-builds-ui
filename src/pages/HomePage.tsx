import React from 'react';
import ItemGrid from '../components/ItemGrid';
import '../style.css';
import ItemFilters from '../components/ItemFilters';
import EmptyBuildCard from '../components/EmptyBuildCard';
import BuildCard from '../components/BuildCard';

const HomePage: React.FC = () => {
  return (
    <div className='flex-container'>
      <ItemFilters />
      <ItemGrid />
      <div>
      <BuildCard />
      <EmptyBuildCard />
      </div>
    </div>
  );
};

export default HomePage;