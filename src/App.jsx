import { Toaster } from "react-hot-toast";
import BuyProcess from "./components/BuyProcess";
import DiscountItems from "./components/DiscountItems";
import AboutUs from "./pages/AboutUs";
import Banner from "./pages/Banner";
import Footer from "./pages/Footer";
import NavBar from "./pages/NavBar";
import Products from "./pages/Products";

function App() {
  return (
    <>
    <Toaster position='top-center'/>
      <NavBar />
      <Banner />
      <BuyProcess />
      <DiscountItems />
      <AboutUs />
      <Products />
      <Footer />
    </>
  );
}

export default App;
