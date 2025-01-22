// "use client";
// import React, { useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   code: string;
//   price: string;
//   image: string;
// }

// const ProductGrid: React.FC = () => {
//   const [selectedCard, setSelectedCard] = useState<number | null>(null);

//   const products: Product[] = [
//     { id: 1, name: "Cantilever chair", code: "Y523201", price: "$42.00", image: "chair1.png" },
//     { id: 2, name: "Cantilever chair", code: "Y523202", price: "$42.00", image: "chair3.png" },
//     { id: 3, name: "Cantilever chair", code: "Y523203", price: "$42.00", image: "chair1.png" },
//     { id: 4, name: "Cantilever chair", code: "Y523204", price: "$42.00", image: "chair3.png" },
//   ];

//   const handleClick = (id: number) => {
//     setSelectedCard(selectedCard === id ? null : id);
//   };

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mt-10">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className={`w-[270px] rounded-lg shadow-md text-center ${
//             selectedCard === product.id ? "h-[400px]" : "h-[361px]"
//           } transition-all duration-300`}
//         >
//           <div onClick={() => handleClick(product.id)} className="cursor-pointer">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-2/3 object-contain"
//             />
//           </div>
//           {selectedCard === product.id ? (
//             <div className="bg-blue-700 text-white p-4 rounded-[30px]">
//               <button className="bg-[#08D15F] text-white px-4 py-1 rounded-md mb-2">
//                 View Details
//               </button>
//               <h3 className="text-lg font-bold">{product.name}</h3>
//               <p>
//                 Code - <span className="text-gray-300">{product.code}</span>
//               </p>
//               <p className="text-white mt-1">{product.price}</p>
//             </div>
//           ) : (
//             <div className="p-2">
//               <h3 className="text-pink-600 font-bold">{product.name}</h3>
//               <p className="text-gray-500">
//                 Code - <span className="text-[#151875] font-medium">{product.code}</span>
//               </p>
//               <p className="text-gray-800 mt-1">{product.price}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;



// import { allProducts } from "@/lib/queries";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import product from "@/sanity/schemaTypes/product";
// import { Product } from "@/types/product";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// const ProductGrid = () => {
//   const [product, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchProducts: Product[] = await client.fetch(allProducts);
//       setProducts(fetchProducts);
//     }
//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {product.map((product) => (
//         <div key={product._id}>
//           {product.name}
//           {product.image && (
//             <Image 
//             src={urlFor(product.image).url()}
//             alt="image"
//             width={200}
//             height={200}
//             />
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }
// export default ProductGrid;

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { Image as IImage } from "sanity";
import { urlForImage } from "@/sanity/lib/image";

export const getProdctsData = async () => {
  const res = await client.fetch(`*[_type=="product" && _id in ["YTjpX7gIRs7VphrWQP0GUo", "sDoE4Hn6nkBPnCufhCwG03", "xaIbDd12g3ehznCa7VTNHy", "xaIbDd12g3ehznCa7VTK9S"]]{
    name,
    description,
    price,
    _id,
    image,
    stockLevel
  }`);
  return res;
};

interface IProduct {
  name: string;
  description: string;
  _id: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
}

export default async function ProductGrid() {
  const data: IProduct[] = await getProdctsData();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {item.image && (
              <div className="relative w-full h-0 pb-[75%]">
                <Image
                  src={urlForImage(item.image).url()}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            )}
            <h2 className="text-lg font-semibold mt-4">{item.name}</h2>
            <h3 className="text-gray-500 mt-2">${item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
