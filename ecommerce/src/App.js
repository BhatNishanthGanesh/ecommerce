import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./pages/Home";
import Profile from "./components/profile"
import ReviewPage from "./components/ReviewPage";
import Footer from "./components/footer";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/footer" element={<Footer/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/review" element={<ReviewPage/>}></Route>
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
