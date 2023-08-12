import React, { createContext, useEffect, useState } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  // State for houses and filters
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property Type');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price');
  const [startDate, setStartDate] = useState('Move-in Date');
  const [startDates, setStartDates] = useState([]);
  const [loading, setLoading] = useState(false);

  // Filter options for different conditions
  const isDefault = (str) => str.split(' ').includes('(any)');

  useEffect(() => {
    // Extract unique countries from houses
    const allCountries = housesData.map((house) => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    // Extract unique property types from houses
    const allProperties = housesData.map((house) => house.type);
    const uniqueProperty = ['Property (any)', ...new Set(allProperties)];
    setProperties(uniqueProperty);
  }, []);

  useEffect(() => {
    // Extract unique listing dates from houses
    const allDates = housesData.map((house) => house.listingDate);
    const uniqueDate = ['Date (any)', ...new Set(allDates)];
    setStartDates(uniqueDate);
  }, []);

  const onHandleClick = (name) => {
    setLoading(true);

    // Filter houses by name
    const newHouses = housesData.filter((house) => house.name === name);

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
      // Reset other filter values to default
      setCountry('Location (any)');
      setProperty('Property (any)');
      setPrice('Price (any)');
      setStartDate('Date (any)');
    }, 1000);
  };

  const handleClick = () => {
    setLoading(true);

    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // Apply filters based on different conditions
      return (
        (isDefault(country) || house.country === country) &&
        (isDefault(property) || house.type === property) &&
        (isDefault(startDate) || house.listingDate === startDate) &&
        (isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice))
      );
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  // Provide filtered houses and filter functions to components
  return (
    <HouseContext.Provider
      value={{
        houses,
        onHandleClick,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        startDate,
        setStartDate,
        startDates,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
