import "./App.css";
import Navbar from "./components/Navbar";
import MiddleSection from "./components/MiddleSection";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Secondcarousel from "./components/Secondcarousel";
import Footer from "./components/Footer";
import LikePage from "./components/LikePage";
import Cart from "./components/Cart";

function App() {
  useEffect(() => {
    // document.body.style.backgroundColor = "lightgrey";
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navbar /> <MiddleSection /> <Secondcarousel/> <Footer/> {" "}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />{" "}
              </>
            }
          />
          <Route path="/likepage" element={<> <Navbar/> <LikePage/> </>  } />
          <Route path="/cart" element={<> <Navbar/> <Cart/> </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
