"use client";
import React from "react";

const Intro = () => {
  return (
    <div className="flex items-center justify-center w-full h-full text-center flex-col">
      <img 
        src="/Images/logo.png" 
        alt="TProBono Logo" 
        style={{ width: '350px', height: 'auto' }}  // Adjust size as needed
      />
      <h1 className="text-4xl font-bold text-white">
        <u>TProBono</u>
      </h1>
      <h2 className="text-lg text-white">Technology for public goods</h2>
    </div>
  );
};

export default Intro;
