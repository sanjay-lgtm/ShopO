import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActivationPage, BestSellingPage, EventsPage, FAQPage, HomePage, LoginPage, ProductsPage, SignUpPage } from "./Routes";


import store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";


function App() {
  const { loading } = useSelector((state) => state.user || {});
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <>
      {
        loading ? null : (
          <>
            <Router>
              <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/sign-up" element={ <SignUpPage /> } />
                <Route path="/activation/:activation_token" element={ <ActivationPage /> } />
                <Route path="/products" element={ <ProductsPage /> } />
                <Route path="/best-selling" element={ <BestSellingPage /> } />
                <Route path="/events" element={ <EventsPage /> } />
                <Route path="/faq" element={ <FAQPage /> } />


              </Routes>
            </Router>
          </>
        )
      }
    </>
  )
}

export default App
