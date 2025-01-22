// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { Image as IImage } from "sanity";
// import { urlForImage } from "@/sanity/lib/image";

// export const getProductsData = async () => {
//     const res = await client.fetch(`*[_type=="product" && _id in ["pNdFo0jzUh1upuRBLrEOxe", "qQpkQmFIZ2DSQkhvXYnVR7", "qQpkQmFIZ2DSQkhvXYnWnD", "pNdFo0jzUh1upuRBLrEMZy", "rnb16y4e0BKBgYGF3Rrwl3", "qQpkQmFIZ2DSQkhvXYnUVm"]]{
//     name,
//     description,
//     price,
//     _id,
//     image,
//     stockLevel,
//     discountPercentage
//   }`);
//     return res;
// };

// interface IProduct {
//     name: string;
//     description: string;
//     _id: string;
//     price: number;
//     discountPercentage: number;
//     image: IImage;
// }

// export default async function LatestProduct() {
//     const data: IProduct[] = await getProductsData();

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-center">Latest Products</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//                 {data.map((item) => {
//                     const discountedPrice = item.price - (item.price * item.discountPercentage) / 100;

//                     return (
//                         <div
//                             key={item._id}
//                             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
//                         >
//                             {item.image && (
//                                 <div className="w-full h-60 relative">
//                                     <Image
//                                         src={urlForImage(item.image).url()}
//                                         alt={item.name}
//                                         layout="fill"
//                                         objectFit="cover"
//                                         className="rounded-md"
//                                     />
//                                 </div>
//                             )}
//                             <h2 className="text-lg font-semibold mt-4">{item.name}</h2>
//                             <div className="flex items-center mt-2">
//                                 <span className="text-[#151875] font-bold mr-2">${discountedPrice.toFixed(2)}</span>
//                                 <span className="text-[#FB2448] line-through">${item.price}</span>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

"use client";
import React, { useState } from "react";

function LatestProduct() {
  // Define the products object with explicit type
  const products: Record<
    "New Arrival" | "Best Seller" | "Featured" | "Special Offer",
    { id: number; name: string; price: string; originalPrice: string; img: string }[]
  > = {
    "New Arrival": [
      { id: 1, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest1.png" },
      { id: 2, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest2.png" },
      { id: 3, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest3.png" },
      { id: 4, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest4.png" },
      { id: 5, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest5.png" },
      { id: 6, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest6.png" },
    ],
    "Best Seller": [
      { id: 1, name: "Elegant Craft", price: "$50.00", originalPrice: "$75.00", img: "latest6.png" },
      { id: 2, name: "Modern Handy Craft", price: "$45.00", originalPrice: "$65.00", img: "latest5.png" },
      { id: 3, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest4.png" },
      { id: 4, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest3.png" },
      { id: 5, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest2.png" },
      { id: 6, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest1.png" },
    ],
    "Featured": [
      { id: 1, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest3.png" },
      { id: 2, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest2.png" },
      { id: 3, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest1.png" },
      { id: 4, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest5.png" },
      { id: 5, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest6.png" },
      { id: 6, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest4.png" },
    ],
    "Special Offer": [
      { id: 1, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest1.png" },
      { id: 2, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest2.png" },
      { id: 3, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest1.png" },
      { id: 4, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest2.png" },
      { id: 5, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest1.png" },
      { id: 6, name: "Comfort Handy Craft", price: "$42.00", originalPrice: "$65.00", img: "latest2.png" },
    ],
  };

  // Define category state with type as keys of products
  const [category, setCategory] = useState<keyof typeof products>("New Arrival");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>

      {/* Navigation */}
      <div className="flex justify-center space-x-8 text-[#151875]">
        {Object.keys(products).map((cat) => (
          <button
            key={cat}
            className={`${
              category === cat ? "text-[#FB4997] font-semibold" : "hover:text-[#FB4997]"
            }`}
            onClick={() => setCategory(cat as keyof typeof products)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {products[category].map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 bg-[#f7f7f7]">
            <div className="w-full h-60 mx-auto">
              <img
                src={product.img}
                alt={product.name}
                className="w-[250px] h-full object-cover rounded-t-lg mb-4"
              />
            </div>
            <div className="flex justify-between bg-white p-8 rounded-b-lg">
              <h2 className="text-lg font-semibold mb-2 text-[#151875]">{product.name}</h2>
              <div className="flex items-center">
                <span className="text-[#151875] font-bold mr-2">{product.price}</span>
                <span className="text-[#FB2448] line-through">{product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestProduct;