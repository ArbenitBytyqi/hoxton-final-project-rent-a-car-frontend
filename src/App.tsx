import React, { Fragment, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import About from "./pages/About";

import CarDetails from "./pages/CarDetails";
import CarListing from "./pages/CarListing";
import Contact from "./pages/Contact";
import { CreateAccount } from "./pages/CreateAccount";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { SignInPage } from "./pages/Signin";
import { Cars, User } from "./types";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Review } from "./pages/Review";
import { DisplayReviews } from "./pages/DisplayReviews";

export function App() {
  const navigate = useNavigate();
  const [cars, setCars] = useState<Cars[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function signIn(data: { user: any; token: string }) {
    setCurrentUser(data.user);
    localStorage.token = data.token;
    navigate("/home");
  }

  function signOut() {
    setCurrentUser(null);
    localStorage.removeItem("token");
    navigate("/home");
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch("http://localhost:4000/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            signIn(data);
          }
        });
    }
  }, []);

  return (
    <Fragment>
      <Header signOut={signOut} currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home signOut={signOut} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<CarListing />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route
          path="/displayreviews"
          element={<DisplayReviews currentUser={currentUser} />}
        />
        <Route
          path="/reviews"
          element={<Review currentUser={currentUser} signOut={signOut} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignInPage signIn={signIn} />} />
        <Route path="/sign-up" element={<CreateAccount signIn={signIn} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}
