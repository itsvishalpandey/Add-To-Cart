import React from "react";
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";

function App() {
  const location = useLocation();

  return (
    <>
      {/* {location !== "/signin" && location !== "/signup" && <Header />} */}
      <Header />
      <Outlet />
    </>
  );
}

export default App;
