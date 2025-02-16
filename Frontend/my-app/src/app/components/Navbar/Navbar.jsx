"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/CodeScienceSvg1.svg")
  const [IsOpen, SetIsOpen] = useState(false); 
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  const toggleMenu = () => {
    SetIsOpen(!IsOpen); // Toggle the open state
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auth/session", {
          method: "GET",
          credentials: "include", // Ensures cookies are sent
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) throw new Error("Failed to fetch session");
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();
  }, [session]);

  useEffect(() => {
    if (theme === "dark") {
      setLogoSrc("/CodeScienceSvg1.svg");
    } else {
      setLogoSrc("/CodeScienceSvg2.svg");
    }
  }, [theme]);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <nav className="border-gray-200  bg-white dark:bg-neutral-950 sticky top-0 z-50">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 lg:py-8 py-5">
        <div className="flex items-center mx-4 space-x-3 rtl:space-x-reverse">
          <Image
            src={logoSrc}
            priority={true}
            width={50}
            height={50}
            alt="Logo"
            className="object-cover scale-[3.8] animate-in contrast-[2.2] object-center translate-x-12"
          />
        </div>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <LogoutButton />
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 scale-[1.3] focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            {/* <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full object-cover object-center"
              src={user.user?.image}
              alt="user photo"
              height={100}
              width={100}
            /> */}
            <img className="w-8 rounded-full" src={user?.user?.image} alt="" />
            
          </button>
         
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
          <button
      data-collapse-toggle="navbar-user"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-user"
      aria-expanded={IsOpen ? "true" : "false"} // Dynamically set aria-expanded based on open state
      onClick={toggleMenu} // Toggle the menu state on click
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5 transform transition-all duration-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        {/* Hamburger icon lines */}
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15"
          className={`${IsOpen ? 'opacity-0' : ''}`} // Hide top line when open
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 7h15"
          className={`${IsOpen ? 'opacity-0' : ''}`} // Hide middle line when open
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 13h15"
          className={`${IsOpen ? 'opacity-0' : ''}`} // Hide bottom line when open
        />

        {/* Cross lines */}
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1l15 15" // Cross diagonal line (top left to bottom right)
          className={`${IsOpen ? 'opacity-100' : 'opacity-0'}`} // Show when open
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 15l15-15" // Cross diagonal line (bottom left to top right)
          className={`${IsOpen ? 'opacity-100' : 'opacity-0'}`} // Show when open
        />
      </svg>
    </button>

        </div>
        <div
          className={`items-center ${IsOpen? "block" : "hidden"} justify-between  w-full md:flex md:w-auto md:order-1"
          id="navbar-user`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Create Collection
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
