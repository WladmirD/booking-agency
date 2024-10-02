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
import DestinationsDetail from './components/destination-detail';
import BookingPage from './components/bookings';

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
        <Route
          path='/destination-detail/:id'
          element={<DestinationsDetail />}
        />
        <Route path='/packages' element={<PackagesScreen />} />
        <Route path='/booking' element={<BookingPage />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/payments/:id/:type' element={<PaymentPage />} />
      </Routes>
      {showModal && <Login toggleModal={toggleModal} />}
    </Router>
  );
}

export default App;
