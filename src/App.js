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
import PackagesDetail from './components/package-detail';

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header toggleModal={toggleModal} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route
          path='/destination-detail/:id'
          element={<DestinationsDetail />}
        />
        <Route path='/packages' element={<PackagesScreen />} />
        <Route path='/package-detail/:id' element={<PackagesDetail />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/payments/:id/:type' element={<PaymentPage />} />
        <Route path='/bookings' element={<BookingsScreen />} />
      </Routes>
      {showModal && <Login toggleModal={toggleModal} />}
    </Router>
  );
}

export default App;
