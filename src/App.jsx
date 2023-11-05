// import Home from "./pages/Home";
// import { reactArray } from "./db/reactArray";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   const arrayOfObjects = reactArray.map((item) => ({
//     id: item._id,
//     link: `/#${item.link}`,
//   }));

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           {arrayOfObjects.map((item) => (
//             <Route key={item.id} path={item.link} />
//           ))}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./components/Card";
import { reactArray } from "./db/reactArray";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {reactArray.map((item) => (
          <Route
            key={item._id}
            path={`/${item.link}`}
            element={<Card {...item} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
