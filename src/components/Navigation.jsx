// import { reactArray } from "../db/reactArray";

// const Navigation = () => {
//   return (
//     <nav className="flex justify-center items-center p-4 flex-wrap gap-2">
//       {reactArray.map((item) => (
//         <a
//           className="px-4 py-2 text-xl bg-secondary text-white rounded-xl "
//           key={item._id}
//           href={`#${item.link}`}
//         >
//           {item.title}
//         </a>
//       ))}
//     </nav>
//   );
// };

// export default Navigation;

// import React, { useEffect, useState } from "react";
// import { reactArray } from "../db/reactArray";

// const Navigation = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Limpia el evento al desmontar el componente
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav
//       className={`flex justify-center items-center p-4 flex-wrap gap-2 ${
//         scrolling ? "fixed top-0 right-0 left-0 bg-white" : ""
//       }`}
//     >
//       {/* Botón de hamburguesa para pantallas pequeñas */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="px-2 py-1 text-xl bg-secondary text-white rounded"
//         >
//           &#9776;
//         </button>
//       </div>

//       {/* Enlaces de navegación */}
//       <div
//         className={`md:flex ${
//           menuOpen ? "block" : "hidden"
//         } md:items-center md:w-auto w-full`}
//       >
//         {reactArray.map((item) => (
//           <a
//             key={item._id}
//             href={`#${item.link}`}
//             className="block mt-4 md:inline-block md:mt-0 px-4 py-2 text-xl bg-secondary text-white rounded-xl"
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

// import React, { useEffect, useState } from "react";
// import { reactArray } from "../db/reactArray";

// const Navigation = () => {
//   const [scrolling, setScrolling] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Limpia el evento al desmontar el componente
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav
//       className={`flex justify-center items-center p-4 flex-wrap gap-2 ${
//         scrolling ? "fixed top-0 right-0 left-0 bg-white z-50" : ""
//       }`}
//     >
//       {/* Botón de hamburguesa para pantallas pequeñas */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="px-2 py-1 text-xl bg-secondary text-white rounded"
//         >
//           &#9776;
//         </button>
//       </div>

//       {/* Enlaces de navegación */}
//       <div
//         className={`md:flex ${
//           menuOpen ? "block" : "hidden"
//         } md:items-center md:w-auto w-full`}
//       >
//         {reactArray.map((item) => (
//           <a
//             key={item._id}
//             href={`#${item.link}`}
//             className="block mt-4 md:inline-block md:mt-0 px-4 py-2 text-xl bg-secondary text-white rounded-xl"
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

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

    // Limpia el evento al desmontar el componente
    return () => {
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
      className={`flex justify-center items-center p-4 flex-wrap gap-2 ${
        scrolling
          ? "fixed top-[-0.5rem] right-0 left-0 h-[auto] p-0  bg-secondary z-50 pb-0.5"
          : ""
      }`}
    >
      {/* Botón de hamburguesa para pantallas pequeñas */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className={`px-2 py-1 text-xl bg-secondary text-white rounded ${
            scrolling ? "pt-2 pb-0 m-0" : ""
          }`}
        >
          &#9776;
        </button>
      </div>

      {/* Enlaces de navegación */}
      <div
        className={`md:flex ${
          menuOpen ? "block" : "hidden"
        } md:items-center md:w-auto w-full`}
      >
        {reactArray.map((item) => (
          <a
            key={item._id}
            href={`#${item.link}`}
            className={`block mt-4 md:inline-block md:mt-0 px-4 py-2 text-xl bg-secondary text-white rounded-xl ${
              scrolling ? "px-4 py-1 text-black  mt-3 " : ""
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
