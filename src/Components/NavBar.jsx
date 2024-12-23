import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from 'framer-motion'

const NavBar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>

      <nav className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60">
        <div className="container flex h-14 items-center justify-between mx-auto">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" to="/">
              <span className="text-xl font-bold sm:inline-block">
                Satoshi Check
              </span>
            </Link>
          </div>

          <div className="hidden md:flex ">
            <ThemeToggle />
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div>
                <Link className="p-4" to="/account">Account</Link>
                <button onClick={handleSignOut} className="bg-button px-4 py-2 rounded text-buttonText">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                  <Link to="/signIn" className="p-2 hover:text-accent">Sign In</Link>
                <Link to="/signUp">
                  <button className="bg-button px-4 py-2 rounded text-buttonText hover:shadow-md">Sign Up</button>
                </Link>
              </div>
            )}
          </div>


          {/*mobile menu icon */}
          <div className="flex items-center md:hidden cursor-pointer z-10" onClick={handleNav}>
            {showNav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>



        </div>
      </nav>
      {/*mobile menu*/}
      <AnimatePresence>
        {showNav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowNav(false)}
            />
            <motion.div
              initial={{ x: '90%' }}
              animate={{ x: 0 }}
              exit={{ x: '90%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 md:w-1/2 lg:w-1/3 bg-primary z-50 overflow-y-auto"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-end mb-6">
                  <button size="icon" onClick={() => setShowNav(false)}>
                    <AiOutlineClose className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-6">
                  <ThemeToggle />
                  <Link className="block px-3 py-2 text-base font-medium" onClick={handleNav} to="/">Home</Link>{" "}
                  {user ? (
                    <>
                      <Link className="block px-3 py-2" to="/account">
                        Account
                      </Link>
                      <button onClick={handleSignOut} className="block bg-button px-3 py-2 rounded text-buttonText">
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link className="block px-3 py-2" to="/signIn" >
                        Sign In
                      </Link>
                      <Link className="block py-2" to="/signUp">
                        <button className="w-full bg-button  px-4 py-2 rounded text-buttonText hover:shadow-md">Sign Up</button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>

        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
