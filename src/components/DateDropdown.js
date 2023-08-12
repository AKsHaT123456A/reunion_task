import React, { useContext, useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const DateDropdown = () => {
  // Destructure properties from the context directly in function parameters
  const { houses, startDate, setStartDate, startDates } = useContext(HouseContext);

  // State to hold filtered properties
  const [filteredProperties, setFilteredProperties] = useState([]);

  
  // Filter properties based on selected start date
  const filterProperties = (start) => {
    const filtered = houses.filter((house) => {
      return house.listingDate >= start;
    });

    setFilteredProperties(filtered);
  };

  // State for controlling the dropdown open/closed state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as="div" className="dropdown">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        {/* Icon for the primary state */}
        <SlCalender className="dropdown-icon-primary" />
        <div>
          {/* Displaying the selected start date */}
          <div className="text-[15px] font-medium">{startDate}</div>
          <div className="text-[13px] text-gray-400">Select a start date</div>
        </div>
        {/* Icon that changes based on the dropdown state */}
        {isOpen ? <RiArrowUpSLine className="dropdown-icon-secondary" /> : <RiArrowDownSLine className="dropdown-icon-secondary" />}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {startDates.map((startDate, index) => (
          <Menu.Item key={startDate}>
            {({ active }) => (
              <li
                className={`cursor-pointer hover:text-purple-700 transition ${active ? "text-purple-700" : ""}`}
                onClick={() => {
                  setStartDate(startDate);
                  setIsOpen(false); // Close the dropdown after selecting
                  filterProperties(startDate); // Filter properties on start date selection
                }}
              >
                {startDate}
              </li>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default DateDropdown;
