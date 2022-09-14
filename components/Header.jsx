import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import { getCategories } from "../services";
import Hamburger from "./Hamburger";

const Header = () => {
  // const [categories, setCategories] = useState([]);
  const [transition, setTransition] = useState("0px");

  const router = useRouter();

  const handleClick = (e) => {
    transition === "0px" ? setTransition("119px") : setTransition("0px");
  };

  // useEffect(() => {
  //   getCategories().then((newCategories) => setCategories(newCategories));
  // }, []);

  const menu = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
    { title: "articles", path: "/articles" },
  ];

  return (
    <div className="border-b grid grid-cols-7 justify-items-stretch border-teal pt-7 pb-5 md:pb-6 max-w-5xl mx-auto">
      <div className="col-span-6 md:col-span-3">
        <Link href="/">
          <span className="cursor-pointer text-4xl">Casey Carroll</span>
        </Link>
      </div>
      <div className="hidden md:float-left md:contents">
        {menu.map((item) => (
          <Link key={item.title} href={item.path}>
            <span
              className={`md:float-right mt-2 align-middle justify-self-end ml-4 cursor-pointer ${
                router.pathname === item.path ? "text-teal" : "text-gray-500"
              }`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
      {/* Mobile Menu */}
      <Hamburger onClick={handleClick} />
      <div
        className="expand col-start-3 col-span-3
           justify-self-center md:hidden pt-2"
        style={{ height: transition }}
      >
        <ul className="text-center text-lg">
          {menu.map((item) => {
            return (
              <Link key={item.title} href={item.path}>
                <li
                  className={`cursor-pointer ${
                    router.pathname === item.path
                      ? "text-teal"
                      : "text-gray-500"
                  }`}
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
