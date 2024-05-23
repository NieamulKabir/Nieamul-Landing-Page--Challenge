import { useState } from "react";
import { getAllProducts } from "../lib/data";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [active, setActive] = useState(null);

  const allProducts = active ? getAllProducts().filter((item)=> item.category === active) : getAllProducts()

  return (
    <section className="max-w-[1321px] mx-auto mt-[147px] mb-[150px]">
      <div className="flex flex-col md:flex-row justify-center items-start mx-4 md:mx-0 md:justify-between md:items-end">
        <div>
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className="mt-4 ">
            Experience crystal clear vision and elevated style with our <br />{" "}
            premium collection of eyeglasses.
          </p>
        </div>
        <div>
          <div className="flex gap-x-6 mt-10 md:mx-0 ms-[-10px] md:ms-0">
            <button
              className={`${
                active === "latest" && " border-black rounded-md border-2"
              } px-10 py-3 `}
              onClick={() => setActive("latest")}
            >
              Latest
            </button>
            <button
              className={`${
                active === "special" && " border-black rounded-md border-2"
              } px-10 py-3 `}
              onClick={() => setActive("special")}
            >
              Special{" "}
            </button>
            <button
              className={`${
                active === "bestSell" && " border-black rounded-md border-2"
              } px-10 py-3 `}
              onClick={() => setActive("bestSell")}
            >
              Best Sell
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3">
          {allProducts &&
            allProducts.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
