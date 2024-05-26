// LandingPage.jsx

import React from "react";
import Foto from "../images/foto.png";
import "../App.css"; // Pastikan untuk menambahkan path gambar latar belakang di file CSS ini

const LandingPage = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('')` }}
    >
      <div className=" w-full h-full absolute top-0 left-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white md:text-left text-center mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Rendy <span className="text-indigo-500 font-bold ">Saputra</span>
          </h1>
          <h2 className="text-xl md:text-4xl font-italic mb-4">
            Web Developer &{" "}
            <span className="text-indigo-500 font-bold">Analys Data</span>
          </h2>
          <p className="text-lg md:text-xl">
            I am a web developer with experience in building Modern and
            responsive web applications. and I am also a Data Analyst with
            qualified skills. See my work below!
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={Foto}
            alt="Profile"
            className="w-70 h-70 md:w-70 md:h-70 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
