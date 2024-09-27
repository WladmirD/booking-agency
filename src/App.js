import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationItem from './components/reservation-item';
import Header from './components/header';
import BookingsScreen from './components/bookings';
import ContactScreen from './components/contact';
import Home from './components/home';

const Destinations = () => <div>Destinations Page</div>;
const Packages = () => <div>Packages Page</div>;
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
        <Route path='/booking' element={<BookingsScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
