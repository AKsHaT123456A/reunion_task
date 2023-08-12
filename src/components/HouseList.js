import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from '../components/House';
import {ImSpinner2} from 'react-icons/im'

const HouseList = () => {
  const {houses, loading} = useContext(HouseContext);

  if(loading){
    return (<ImSpinner2 className='mx-auto animate-spin text-purple-700 text-4xl mt-[150px]'/>)
  }
  if(houses.length < 1){
    return <div className='text-center text-3xl text-gray-400 mt-40'>Sorry, No Results Found!</div>
  }

  return <section className='mb-20'>
    <div className='container mx-auto'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:gap-14'>
        {houses.map((house, index)=>{
          return (
            <House house={house} key={index}/>
          )
        })}
      </div>
    </div>
  </section>;
};

export default HouseList;
