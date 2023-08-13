import React, { createContext, useEffect, useState } from 'react';
import {housesData} from '../data'

export const HouseContext = createContext();

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData)
  const [name, setName] = useState('')
  const [country, setCountry] = useState('Location (any)')
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property (any)')
  const [properties, setProperties] = useState([])
  const [price, setPrice] = useState('Price (any)')
  const [startDate, setStartDate] = useState('Date (any)');
  const [startDates, setStartDates] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    const allCountries = houses.map((house)=> {
      return house.country
    });
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    setCountries(uniqueCountries);
  },[]);


  useEffect(()=> {
    const allProperties = houses.map((house)=> {
      return house.type
    });
    const uniqueProperty = ['Property (any)',...new Set(allProperties)]
    setProperties(uniqueProperty);
  },[]);


  useEffect(()=> {
    const allDates = houses.map((house)=> {
      return house.listingDate
    });
    const uniqueDate = ['Date (any)',...new Set(allDates)]
    setStartDates(uniqueDate);
  },[]);

const onHandleClick = (name) => {
  setLoading(true);

  const newHouses = housesData.filter((house)=>{
    if(house.name === name){
      return house;
    }
  })

  setTimeout(() => {
    return (newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false));
  }, 1000);
}  

const handleClick = () => {
  setLoading(true);

  const isDefault = (str) => {
    return str.split(' ').includes('(any)');
  };

  const minPrice = parseInt(price.split(' ')[0]);
  const maxPrice = parseInt(price.split(' ')[2]);

  const newHouses = housesData.filter((house)=>{
    const housePrice = parseInt(house.price);
    //all
    if(house.country === country && house.type === property && house.listingDate===startDate && housePrice>=minPrice && housePrice<=maxPrice){
      return house;
    }
    //none
    if(isDefault(country) && isDefault(property) && isDefault(startDate) && isDefault(price)){
      return house;
    }
    //country
    if(!isDefault(country) && isDefault(property) && isDefault(startDate) && isDefault(price)){
      return house.country === country;
    }
    //type
    if(isDefault(country) && !isDefault(property) && isDefault(startDate) && isDefault(price)){
      return house.type === property;
    }
    //date
    if(isDefault(country) && isDefault(property) && !isDefault(startDate) && isDefault(price)){
      return house.listingDate === startDate;
    }
    //price
    if(isDefault(country) && isDefault(property) && isDefault(startDate) && !isDefault(price)){
      if(housePrice>=minPrice && housePrice<=maxPrice){
        return house;
      }
    }
    //ccountry-type
    if(!isDefault(country) && !isDefault(property) && isDefault(startDate) && isDefault(price)){
      return house.country === country && house.type === property;
    }
    //type-date
    if(isDefault(country) && !isDefault(property) && !isDefault(startDate) && isDefault(price)){
      return house.type === property && house.listingDate===startDate;
    }
    //country-date
    if(!isDefault(country) && isDefault(property) && !isDefault(startDate) && isDefault(price)){
      return house.country === country && house.listingDate===startDate;
    }
    //country-price
    if(!isDefault(country) && isDefault(property) && isDefault(startDate) && !isDefault(price)){
      if(housePrice>=minPrice && housePrice<=maxPrice){
        return house.country === country;
      }
    }
    //type-price
    if(isDefault(country) && !isDefault(property) && isDefault(startDate) && !isDefault(price)){
      if(housePrice>=minPrice && housePrice<=maxPrice){
        return house.type === property;
      }
    }
    //date-price
    if(isDefault(country) && isDefault(property) && !isDefault(startDate) && !isDefault(price)){
      if(housePrice>=minPrice && housePrice<=maxPrice){
        return house.listingDate === startDate;
      }
    }
    //type-date-price
    if(isDefault(country) && !isDefault(property) && !isDefault(startDate) && !isDefault(price)){
      if(housePrice>=minPrice && housePrice<=maxPrice){
        return house.type === property && house.listingDate===startDate;
      }
    }
    //country-date-price
    if(!isDefault(country) && isDefault(property) && !isDefault(startDate) && !isDefault(price)){
      if(housePrice>=minPrice && housePrice<=maxPrice){
        return house.country === country && house.listingDate === startDate;
      }
    }
    //country-type-price
    if(!isDefault(country) && !isDefault(property) && isDefault(startDate) && !isDefault(price)){
      if(housePrice>=minPrice && housePrice<=maxPrice){
        return house.country === country && house.type === property;
      }
    }
    //country-type-date
    if(!isDefault(country) && !isDefault(property) && !isDefault(startDate) && isDefault(price)){
        return house.country === country && house.type === property && house.listingDate === startDate;
    }
  });

  setTimeout(() => {
    return (newHouses.length < 1 ? setHouses([]) : setHouses(newHouses), setLoading(false));
  }, 1000);
}

  return <HouseContext.Provider value={{houses,onHandleClick,country,setCountry,countries,property,setProperty,properties,price,setPrice,startDate,setStartDate,startDates,loading, handleClick}}>{children}</HouseContext.Provider>
}

export default HouseContextProvider;