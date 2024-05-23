/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import heart from "../assets/heart.png";
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const images = product.images;
  const [showImage, setShowImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const cartItem = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
  const isOnCart = cartItem.find((item) => item.id === product.id);

  const handleAddToCart = (product) => {
    if (!isOnCart) {
      cartItem.push(product);
      toast.success("Product added to cart ");
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      toast.error("Product already in cart");
    }
  };

  return (
    <div className="cols-item w-[417px] h-[630px] px-4 md:px-0 ">
      <div className="bg-gray-100">
        <div className="ms-[-20px] pt-6 px-3 ">
          <div className="flex justify-between items-center  cursor-pointer">
            <div className="flex justify-center items-center bg-[#FED29C] h-[60px] w-[60px] p-2 rounded-full ms-6 me-40">
              <h1 className="font-semibold">10%</h1>
            </div>
            <div className="flex justify-center items-center  h-[60px] w-[60px] p-2 rounded-full border-2 border-gray-500 ms-20 cursor-pointer">
              <img src={heart} className="w-[30px] h-[30px] mt-1" alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mx-10 mt-28 ">
          <img
            className="w-[343px] h-[211px]"
            src={product?.images[showImage]}
            alt=""
          />
        </div>

        <div className="py-6 mx-auto flex justify-center gap-4">
          {images.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setShowImage(index)}
                className={`h-[15px] w-[15px] rounded-full cursor-pointer ${
                  showImage === index
                    ? "bg-[#FED29C] border-4 border-gray-400 p-1"
                    : "bg-[#797777]"
                }`}
              ></div>
            );
          })}
        </div>
      </div>

      <div className=" mt-6">
        <h1 className="text-2xl font-semibold">{product?.name}</h1>
        <div className="font-semibold">
          {product.discountPrice ? (
            <div>
              <span>${product.discountPrice}</span>{" "}
              <span className="line-through text-gray-400 font-bold">
                ${product.price}{" "}
              </span>
            </div>
          ) : (
            <div className="font-bold"> ${product.price}</div>
          )}
          <button
            onClick={() => handleAddToCart(product)}
            className={`${isOnCart && "text-gray-400"} cursor-pointer mt-3 underline`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
