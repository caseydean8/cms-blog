import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCategories } from "../services";
import Hamburger from "./Hamburger";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [transition, setTransition] = useState("0px");

  const router = useRouter();

  const handleClick = (e) => {
    transition === "0px" ? setTransition("106px") : setTransition("0px");
  };

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const menu = [
    { title: "home", path: "/" },
    { title: "about", path: "/about" },
    { title: "contact", path: "/contact" },
    { title: "articles", path: "/articles" },
  ];

  return (
    <div className="container mx-auto md:px-10 px-8 mb-8">
      <div className="border-b grid grid-cols-5 justify-items-stretch border-teal py-8">
        <div className="col-span-4 md:col-span-3">
          <Link href="/">
            <span className="cursor-pointer text-4xl">Casey Carroll</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden md:float-left md:contents">
          {menu.map((item) => (
            <Link key={item.title} href={item.path}>
              <span
                className={`md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer ${
                  router.pathname === item.path ? "text-teal" : ""
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
        <Hamburger onClick={handleClick} />
        <div
          className="expand col-start-2 col-span-3 justify-self-center md:hidden"
          style={{ height: transition }}
        >
          <ul className="text-center text-lg">
            {menu.map((item) => {
              return (
                <Link key={item.title} href={item.path}>
                  <li
                    className={`cursor-pointer ${
                      router.pathname === item.path ? "text-teal" : ""
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
    </div>
  );
};

export default Header;
