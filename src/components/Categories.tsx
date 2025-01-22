"use client";

import React from "react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Mini LCV Chair",
    price: "$56.00",
    image: "/top3.png", // Replace with your correct image path
  },
  {
    id: 2,
    title: "Elegant Table",
    price: "$70.00",
    image: "/top2.png", // Replace with your correct image path
  },
  {
    id: 3,
    title: "Modern Sofa",
    price: "$120.00",
    image: "/top1.png", // Replace with your correct image path
  },
  {
    id: 4,
    title: "Stylish Lamp",
    price: "$45.00",
    image: "/top3.png", // Replace with your correct image path
  },
];

const TopCategories = () => {
  return (
    <section className="py-16 px-4 ">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-[#151875] mb-10">
        Top Categories
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center justify-center"
          >
            {/* Circular Box with Shadow */}
            <div className="w-[269px] h-[269px] bg-[#F6F7FB] rounded-full flex items-center justify-center relative shadow-lg border-8 hover:border-[#7E33E0]">
              <Image
                src={category.image}
                alt={category.title}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            {/* Title and Price */}
            <h2 className="text-lg font-semibold text-[#151875] mt-4">
              {category.title}
            </h2>
            <p className="text-sm text-blue-500 mt-1">{category.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
