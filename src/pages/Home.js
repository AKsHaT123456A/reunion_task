// Import necessary modules and components
import React, { useState, useContext } from "react";
import Search from "../components/Search";
import HouseList from "../components/HouseList";
import { HouseContext } from "../components/HouseContext";

const Home = () => {
  // Get houses and onHandleClick from HouseContext
  const { houses, onHandleClick } = useContext(HouseContext);

  // State to manage search term, selected value, and dropdown visibility
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Filter houses based on search term
  const filteredData = houses.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle selecting an item from the dropdown
  const handleSelect = (name) => {
    setSelectedValue(name);
    setSearchTerm(name);
    onHandleClick(name);
    setIsDropdownVisible(false); // Hide the dropdown when an item is selected
  };

  // Handle input change in the search box
  const handleInputChange = (e) => {
    const newSearchTerm=(e.target.value);
    setSearchTerm(newSearchTerm); // Update the search term
    console.log(searchTerm);
    setIsDropdownVisible(true); // Show the dropdown when there's input
  };

  return (
    <div className="min-h-[1800px] mx-6">
      <div className="mb-10">
        <div className="mx-6 flex flex-col justify-between items-center md:flex-row">
          {/* Display the search heading */}
          <h1 className="font-semibold text-2xl lg:text-3xl py-4 my-4 flex justify-between">
            Search Properties to rent
          </h1>
          {/* Search input and dropdown */}
          <div className="lg:w-[230px] w-[310px]">
            <input
              className="border rounded-lg p-4 w-full"
              type="text"
              placeholder="Search by property Title"
              value={searchTerm}
              onChange={handleInputChange} // Use the modified handler
            />
            {/* Dropdown list */}
            <div className={`px-6 text-[15px] cursor-pointer space-y-6 after:hidden shadow-md bg-white absolute lg:w-[230px] w-[310px] z-10 list-none rounded-b-lg ${isDropdownVisible ? '' : 'hidden'}`}>
              {/* Display dropdown options based on input */}
              {searchTerm && (
                <ul>
                  {filteredData.map(item => (
                    <li key={item.id} className="py-2">
                      <h3 onClick={() => handleSelect(item.name)}> {item.name}</h3>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Render the Search component */}
        <Search />
      </div>
      {/* Render the HouseList component */}
      <HouseList />
    </div>
  );
};

export default Home;
