import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import Hamburger from "./Hamburger";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
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
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
