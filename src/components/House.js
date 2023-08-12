import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { BsCurrencyRupee } from "react-icons/bs";

const House = ({ house }) => {
  const {
    image,
    type,
    country,
    address,
    bedrooms,
    bathrooms,
    surface,
    listingDate,
    price,
    name,
    popularity
  } = house;

  return (
    <div className="bg-white border rounded-lg mx-auto w-full max-w-[352px] transition hover:shadow-2xl">
      {/* House image */}
      <img className="w-full h-[250px] object-cover rounded-t-lg" src={image} alt="House" />

      <div className="px-5 py-4">
        {/* Type and country labels */}
        <div className="flex gap-x-2 text-sm mb-2">
          <div className="bg-green-500 py-1 px-2 rounded-full text-white">
            {type}
          </div>
          <div className="bg-purple-500 py-1 px-2 rounded-full text-white">
            {country}
          </div>
        </div>

        {/* House name */}
        <div className="font-semibold text-xl mb-2">
          {name}
        </div>

        {/* Address */}
        <div className="text-gray-500 font-medium mb-2">
          {address}
        </div>

        {/* Bedroom, bathroom, and surface information */}
        <div className="flex justify-between py-3 border-t border-gray-300 mx-1">
          <div className="text-gray-400 flex gap-x-1 items-center">
            <BiBed />
            {bedrooms} Bedrooms
          </div>
          <div className="text-gray-400 flex gap-x-1 items-center">
            <BiBath />
            {bathrooms} Bathrooms
          </div>
          <div className="text-gray-400 flex gap-x-1 items-center">
            <BiArea />
            {surface} Sqft
          </div>
        </div>

        {/* Listing date and price */}
        <div className="flex justify-between items-center pt-2">
          <div className="text-gray-700 font-medium flex gap-x-1 items-center">
            <SlCalender />
            {listingDate}
          </div>
          <div className="text-purple-700 font-medium flex gap-x-0.25 items-center">
            <BsCurrencyRupee />
            {price}
          </div>
        </div>

        {/* Popular or Not Popular tag */}
        <div className={`text-sm mt-3 ${popularity ? "text-green-500" : "text-red-500"}`}>
          {popularity ? "Popular" : "Not Popular"}
        </div>
      </div>
    </div>
  );
};

export default House;
