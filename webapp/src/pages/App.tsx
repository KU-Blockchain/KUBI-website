import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DAO from "./DAO";
import Home from "./Home";
import About from "./About";
import { MantineProvider } from "@mantine/core";
import { HeaderSimple } from "../components/header";

const link = [{ link: "./DAO", label: "DAO" }];
function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <HeaderSimple links={link}></HeaderSimple>

        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="DAO">DAO</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          </nav>
          <div className="main">
            {/* Define all the routes */}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="DAO" element={<DAO />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </div>
      </>
    </MantineProvider>
  );
}

export const NotFound = () => {
  return <div>This is a 404 page</div>;
};

export default App;
