import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlightDetails from "./pages/flightDetails";
import LiveFlights from "./pages/liveFlights";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">
            Flight Search
          </Link>
          <Link to="/live">Live Flights</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FlightDetails />} />
          <Route path="/live" element={<LiveFlights />} />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}
