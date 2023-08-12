import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import { HouseContext } from './HouseContext';
import DateDropdown from './DateDropdown';

const Search = () => {
  const { handleClick } = useContext(HouseContext)
  return <div className=' px-2 lg:px-[30px] py-4  flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:top-2 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
    <CountryDropdown />
    <PropertyDropdown />
    <DateDropdown />
    <PriceRangeDropdown />
    <button onClick={() => handleClick()} className='bg-purple-700 hover:bg-purple-800 transition w-full lg:max-w-[150px] h-16 rounded-lg flex justify-center items-center text-lg text-white'>
      Search
    </button>
  </div>;
};

export default Search;
