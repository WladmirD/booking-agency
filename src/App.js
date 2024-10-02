import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PackagesScreen from './components/packages';
import Header from './components/header';
import BookingsScreen from './components/bookings';
import ContactScreen from './components/contact';
import Login from './components/login';
import Home from './components/home';
import Destinations from './components/destinations';
import PaymentPage from './components/payments';

const Signup = () => <div>Sign Up Page</div>;

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Router>
      <Header toggleModal={toggleModal} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/packages' element={<PackagesScreen />} />
        <Route path='/booking' element={<BookingsScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/payments' element={<PaymentPage />} />
      </Routes>
      {showModal && <Login toggleModal={toggleModal} showModal={showModal} />}
    </Router>
  );
}

export default App;
