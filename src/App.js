import Header from './components/header/header';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const Destinations = () => <div>Destinations Page</div>;
const Packages = () => <div>Packages Page</div>;
const Booking = () => <div>Booking Page</div>;
const Contact = () => <div>Contact Us Page</div>;
const Login = () => <div>Login Page</div>;
const Signup = () => <div>Sign Up Page</div>;

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
