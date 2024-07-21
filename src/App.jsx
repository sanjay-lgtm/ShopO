import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ActivationPage, HomePage, LoginPage, ProductsPage, SignUpPage } from "./Routes";


import store from "./redux/store";
import { loadUser } from "./redux/actions/user";


function App() {
  useEffect(() => {
   store.dispatch(loadUser())
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/sign-up" element={ <SignUpPage /> } />
          <Route path="/activation/:activation_token" element={ <ActivationPage /> } />
          <Route path="/products" element={<ProductsPage />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
