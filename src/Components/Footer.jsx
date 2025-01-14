import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="shadow text-primary">
      <div className="container grid md:grid-cols-2 mt-4">
        <div className="flex justify-around md:justify-evenly w-full md:max-w-[300px] capitalize">
          <div>
            <h2 className="font-bold">support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">Api Status</li>
              <li className="text-sm py-2">Read Our</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">Meet The Dev</li>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="flex justify-end w-full">
            <div className="w-full md:max-w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>

              <p className="text-center md:text-right">
                Subscribe To Our Newsletter
              </p>
              <div className="py-4">
                <form action="">
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto "
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button className="bg-button text-buttonText px-4 p-2 w-full rounded-2xl shadow-xl my-2 hover:shadow-2xl md:w-auto">
                    Subscribe
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram />
                <FaFacebook />
                <FaTwitter />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="border-t text-center text-sm py-2">
        {" "}
        © Herman Ceaser 2024. Powered By CoinGecko
      </p>
    </footer>
  );
};

export default Footer;
