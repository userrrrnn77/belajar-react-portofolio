// Pricing.jsx

import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";
import "../App.css";

const Pricing = () => {
  return (
    <section className="container mx-auto px-4 py-8 lg:py-12">
      <h2 className="text-3xl text-white text-shadow-black lg:text-4xl font-bold text-center mb-6 lg:mb-8">
        PROJECT PRICING PLANS
      </h2>
      <p className="text-lg lg:text-xl text-white text-center mb-6 lg:mb-8 shadow-lg">
        Our pricing plans come{" "}
        <span className="text-gray-500 md:text-white sm:text-white">with various</span> membership tiers,
        each tailored to cater to different projects and class + code types.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="bg-gray-800 h-500px w-250px card rounded-lg shadow-lg p-6 md:p-8 flex flex-col ">
          <h4 className="text-lg lg:text-xl text-white font-semibold mb-2">
            Basic Plan
          </h4>
          <h3 className="text-2xl lg:text-3xl text-white font-bold mb-4">
            $10
          </h3>
          
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            Smart coding plan
          </p>
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            At home workouts
          </p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-0 mt-19">
            Join Now
          </button>
        </div>
        <div className="bg-gray-800 h-500px w-250px card rounded-lg shadow-lg p-6 md:p-8 flex flex-col ">
          <h4 className="text-lg lg:text-xl text-white font-semibold mb-2">
            Basic Plan
          </h4>
          <h3 className="text-2xl lg:text-3xl text-white font-bold mb-4">
            $50
          </h3>
          
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            Smart coding plan
          </p>
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            At home workouts
          </p>
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            Pro Codes
          </p>
          <br></br>
          <br></br>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-0 mt-10">
            Join Now
          </button>
        </div>
        <div className="bg-gray-800 h-500px w-250px card rounded-lg shadow-lg p-6 md:p-8 flex flex-col ">
          <h4 className="text-lg lg:text-xl text-white font-semibold mb-2">
            Basic Plan
          </h4>
          <h3 className="text-2xl lg:text-3xl text-white font-bold mb-4">
            $100
          </h3>
          
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            Smart coding plan
          </p>
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            At home workouts
          </p>
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            Pro Codes
          </p>
          <p className="text-sm lg:text-base text-white mb-4">
            <i className="mr-1">
              <RiCheckboxCircleLine />
            </i>
            Elite Classes & Courses
          </p>
          <br></br>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full mb-0 mt-2">
            Join Now
          </button>
        </div>
        {/* Tambahkan card lainnya di sini */}
      </div>
    </section>
  );
};

export default Pricing;
