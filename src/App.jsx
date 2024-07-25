import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActivationPage, BestSellingPage, EventsPage, FAQPage, HomePage, LoginPage, ProductDetailsPage, ProductsPage, ProfilePage, SignUpPage } from "./Routes";
import store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user || {});

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      { loading ? null : (
        <Router>
          <Routes>
            <Route path="/" element={ <HomePage /> } />
           
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/sign-up" element={ <SignUpPage /> } />
            <Route path="/activation/:activation_token" element={ <ActivationPage /> } />
            <Route path="/products" element={ <ProductsPage /> } />
            <Route path="/products/:name" element={ <ProductDetailsPage /> } />
            <Route path="/best-selling" element={ <BestSellingPage /> } />
            <Route path="/events" element={ <EventsPage /> } />
            <Route path="/faq" element={ <FAQPage /> } />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={ isAuthenticated }>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      ) }
    </>
  );
}

export default App;
