import React, { useContext, useState } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false); // Declare the isOpen state

  // Use the country name as a stable key
  const getKey = (item) => item;

  return (
    <Menu as="div" className="dropdown">
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn w-full text-left">
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium">{country}</div>
          <div className="text-[13px] text-gray-400">Select your place</div>
        </div>
        {/* Use inline conditional rendering */}
        {isOpen ? <RiArrowUpSLine className="dropdown-icon-secondary" /> : <RiArrowDownSLine className="dropdown-icon-secondary" />}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {countries.map((country) => (
          <Menu.Item key={getKey(country)}>
            {({ active }) => (
              <li
                className={`cursor-pointer hover:text-purple-700 transition ${active ? "text-purple-700" : ""}`}
                onClick={() => {
                  setCountry(country);
                  setIsOpen(false); // Close the dropdown after selecting
                }}
              >
                {country}
              </li>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
