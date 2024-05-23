import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content lg:pl-[238px]  ">
        <aside>
          <img src={logo} className="w-[149px] h-[37.636px]" alt="logo" />
          <p>
            Latin literature from 45 BC, making it over 2000 <br /> years old.
            Richard McClintock, a Latin professor at <br /> Hampde
          </p>
        </aside>
        <nav>
          <h6 className="text-xl font-bold pb-3">Support</h6>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Product FAQs</a>
          <a className="link link-hover">Company Support</a>
          <a className="link link-hover">Manage Account</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold pb-3">Quick Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Blog Post</a>
          <a className="link link-hover">Product Features</a>
          <a className="link link-hover">Company Info</a>
          <a className="link link-hover">Company Info</a>
        </nav>
        <nav>
          <h6 className="text-xl font-bold pb-3">Communnity</h6>
          <a className="link link-hover">Become an affiliate</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Product FAQs</a>
          <a className="link link-hover">Our Fourms</a>
          <a className="link link-hover">Product API</a>
        </nav>
      </footer>
      <div className="border-t-2 border-[#FED29C] py-5 flex flex-col items-center"></div>
      <div className="lg:px-[238px] flex flex-col justify-center items-center gap-y-4 pb-6 md:pb-0 md:flex-row md:justify-between gap-x-3 mb-12">
        <h6 className="">Copyright © 2023 All rights reserved by Eyeglass</h6>

        <div className="flex gap-x-6">
          <h1>Privacy Policy</h1>
          <h1>Terms of Service</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
