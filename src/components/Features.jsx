// Features.jsx

import React from "react";
import { RiArrowRightLine, RiLineChartLine, RiWebhookLine, RiNodejsLine, RiPagesLine, } from "react-icons/ri";

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-8 lg:py-12">
      <h2 className="text-3xl text-indigo-500 lg:text-4xl font-bold text-center mb-6 lg:mb-8">
        OUR FEATURES
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center hover:border">
          <RiNodejsLine className="text-5xl text-white mb-4 bg-indigo-500 p-1 rounded" />
          <h4 className="text-lg lg:text-xl font-semibold mb-2">Back END</h4>
          <p className="text-sm lg:text-base text-gray-400 mb-4">
            Designing software development from the server side and related to
            databases and logic.
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Join Now <RiArrowRightLine className="inline-block ml-1" />
          </a>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center hover:border">
          <RiLineChartLine className="text-5xl text-white mb-4 bg-indigo-500 p-1 rounded" />
          <h4 className="text-lg lg:text-xl font-semibold mb-2">Data Analys</h4>
          <p className="text-sm lg:text-base text-gray-400 mb-4">
            Activities to examine or investigate an event through data to find
            out the actual situation.
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Join Now <RiArrowRightLine className="inline-block ml-1" />
          </a>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center hover:border">
          <RiWebhookLine className="text-5xl text-white mb-4 bg-indigo-500 p-1 rounded" />
          <h4 className="text-lg lg:text-xl font-semibold mb-2">
            Web Developer
          </h4>
          <p className="text-sm lg:text-base text-gray-400 mb-4">
            How the site's performance remains smooth, so that it provides a
            good user experience.
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Join Now <RiArrowRightLine className="inline-block ml-1" />
          </a>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 lg:p-10 flex flex-col items-center text-center hover:border">
          <RiPagesLine className="text-5xl text-white mb-4 bg-indigo-500 p-1 rounded" />
          <h4 className="text-lg lg:text-xl font-semibold mb-2">Front END</h4>
          <p className="text-sm lg:text-base text-gray-400 mb-4">
            Develop websites that use lines of HTML, CSS, and Javascript code to
            make the web appearance more attractive.
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Join Now <RiArrowRightLine className="inline-block ml-1" />
          </a>
        </div>
        {/* Tambahkan card lainnya di sini */}
      </div>
    </section>
  );
};

export default Features;
