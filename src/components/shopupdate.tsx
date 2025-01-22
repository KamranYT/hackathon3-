// pages/centeredPage.tsx
"use client";

import React from "react";
import Link from "next/link";


const centeredPage = () => {
  return (
    <div
      className="w-[1920px] h-[462px] bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url('/bg1.png')", // Replace with your background image path
      }}
    >
      {/* Text Content */}
      <div className="text-center bg-opacity-50 p-10 rounded-lg">
        <h1 className="text-5xl font-bold text-[35px] text-[#151875] mb-4">
          Get Latest Update By Subscribe
          <br />
          Our Newsletter
        </h1>

        <Link href="/shop">
          <button className="bg-pink-600 text-white px-6 py-3 mt-9 hover:bg-pink-700 transition-all duration-300">
            Shop Now
          </button>
        </Link>
      </div>

      
    </div>
  );
};

export default centeredPage;

