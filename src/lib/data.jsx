import image1 from "../assets/productImages/1.png";
import image2 from "../assets/productImages/2.png";
import image3 from "../assets/productImages/3.png";
import image4 from "../assets/productImages/4.png";
import image5 from "../assets/productImages/5.png";
import image6 from "../assets/productImages/6.png";

const data = [
  {
    id: 1,
    name: "Bravo Sunglasses",
    price: 150,
    discountPrice: 100,
    category: "special",
    images: [image1, image2, image3],
  },
  {
    id: 2,
    name: "Vincent Chase",
    price: 150,
    discountPrice: 120,
    category: "bestSell",
    images: [image2, image3, image4],
  },
  {
    id: 3,
    name: "John Jacobs",
    price: 100,
    discountPrice: null,
    category: "latest",
    images: [image3, image4, image5],
  },
  {
    id: 4,
    name: "Tommy Hilfiger",
    price: 150,
    discountPrice: 130,
    category: "latest",
    images: [image4, image5, image6],
  },
  {
    id: 5,
    name: "Ray Ban",
    price: 100,
    discountPrice: null,
    category: "special",
    images: [image3, image4, image1],
  },
  {
    id: 6,
    name: "Occhiali",
    price: 150,
    discountPrice: 110,
    category: "bestSell",
    images: [image6, image2, image1],
  },
];

function getAllProducts() {
  return data;
}

export { getAllProducts };
