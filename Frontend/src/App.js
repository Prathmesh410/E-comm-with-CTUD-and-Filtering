import React from "react";
import "./App.css"
import {BrowserRouter,Routes,Route} from 'react-router-dom'


//tabs
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/Signup/Signup";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
 <Nav/>
 <Routes>
  <Route path="/" element={<h1>this</h1>}/>
  <Route path="/addproduct" element={<h1>Add Products</h1>}/>
  <Route path="/updateproduct" element={<h1>Update Products</h1>}/>
  <Route path="/deleteproduct" element={<h1>Delete Products</h1>}/>
  <Route path="/logout" element={<h1>Logout</h1>}/>
  <Route path="/profile" element={<h1>Profile</h1>}/>
  <Route path="/signup" element={<Signup/>}/>
 </Routes>
 <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
