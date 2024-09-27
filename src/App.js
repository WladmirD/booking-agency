import React from 'react';
import ReservationItem from './components/reservation-item';
import Header from './components/header';
import BookingsScreen from './components/bookings';
import ContactScreen from './components/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';

const Home = () => <div>Home Page</div>;
const Destinations = () => <div>Destinations Page</div>;
const Packages = () => <div>Packages Page</div>;
const Signup = () => <div>Sign Up Page</div>;

function App() {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Router>
      <Header toggleModal={toggleModal} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/booking' element={<BookingsScreen />} />
        <Route path='/contact' element={<ContactScreen />} />
        <Route path='/login' element={<Login toggleModal={toggleModal} showModal={showModal} />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <div>
        <ReservationItem />
      </div>
    </Router>
  );
}

export default App;
