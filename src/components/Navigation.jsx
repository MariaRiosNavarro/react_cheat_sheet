import React, { useEffect, useState } from "react";
import { reactArray } from "../db/reactArray";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`flex flex-col justify-center items-center p-2 flex-wrap gap-1 ${
        scrolling
          ? "fixed top-[-0.5rem] right-0 left-0 h-[auto] p-0  bg-secondary gap-2 z-50 pb-0.5"
          : ""
      }`}
    >
      <div>
        <button
          onClick={toggleMenu}
          className={`px-2 pb-1 m-0 text-xl bg-secondary text-gray-200 rounded ${
            scrolling ? "pt-2 pb-0 m-0" : ""
          }`}
        >
          &#9776;
        </button>
      </div>
      <div className={` ${menuOpen ? "block pb-4" : "hidden"} `}>
        {reactArray.map((item) => (
          <a
            key={item._id}
            href={`#${item.link}`}
            className={`block mt-1  md:mt-0 px-4 py-2 text-xl bg-secondary text-gray-200 rounded-xl ${
              scrolling ? "px-4 py-1  mt-3 " : ""
            }`}
            onClick={closeMenu}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
