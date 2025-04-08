import react from "react";

import "../CSS/bootstrap.css";
import { Routes, Route } from "react-router";
import Mac from "./Pages/Mac";
import Iphone from "./Pages/Iphone";
import Four04 from "./Pages/Four04";
import Home from "./components/Home/Home";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ProductPages from "./Pages/ProductPages";

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/Iphone" element={<Iphone />} />
          <Route path="Iphone/:productID" element={<ProductPages />} />

          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
