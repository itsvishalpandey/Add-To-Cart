import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import store from "./Store/Store.js";

import Home from "./Components/Home/Home.jsx";
import Series from "./Components/Series/Series.jsx";
import Wishlist from "./Components/Wishlist/Wishlist.jsx";
import SignUp from "./Features/UserProfile/SignUp/SignUp.jsx";
import SignIn from "./Features/UserProfile/SignIn/SignIn.jsx";
import ProfilePage from "./Features/UserProfile/Profile/Profile.jsx";

const authToken = localStorage.getItem("authToken");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="series" element={<Series />} />
      <Route path="wishlist" element={<Wishlist />} />

      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
