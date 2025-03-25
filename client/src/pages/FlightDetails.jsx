import React from "react";

import { useState, useEffect } from "react";
import { getFlightInfo, getLiveFlights } from "../api/flightApi";
import { toast } from "react-toastify";

export default function FlightDetails() {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightData, setFlightData] = useState(null);
  const [defaultFlights, setDefaultFlights] = useState([]);

  // Fetch default flight data on load
  useEffect(() => {
    const fetchDefaultFlights = async () => {
      try {
        const data = await getLiveFlights();
        setDefaultFlights(data.flights);
      } catch (error) {
        toast.error("Error fetching live flights", error);
      }
    };
    fetchDefaultFlights();
  }, []);

  const fetchFlight = async () => {
    try {
      const data = await getFlightInfo(flightNumber);
      setFlightData(data);
    } catch (error) {
      toast.error("Error fetching flight details", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-6">✈️ Aviato</h1>

      <div className="w-full max-w-lg flex items-center space-x-2 bg-white dark:bg-gray-800 p-4 rounded shadow-md">
        <input
          type="text"
          placeholder="Enter Flight Number"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        />
        <button
          onClick={fetchFlight}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {/* Display searched flight data */}
      {flightData && (
        <div className="mt-6 w-full max-w-lg bg-white dark:bg-gray-800 p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">Flight Details</h2>
          <p>
            <strong>Departure:</strong> {flightData.departure_airport}
          </p>
          <p>
            <strong>Arrival:</strong> {flightData.arrival_airport}
          </p>
          <p>
            <strong>Status:</strong> {flightData.status}
          </p>
        </div>
      )}

      {/* Display default live flights */}
      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Live Flights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {defaultFlights.length > 0 ? (
            defaultFlights.map((flight, index) => (
              <div
                key={index}
                className="border p-3 bg-white dark:bg-gray-800 rounded shadow"
              >
                <p>
                  <strong>ICAO:</strong> {flight.icao}
                </p>
                <p>
                  <strong>Callsign:</strong> {flight.callsign || "N/A"}
                </p>
                <p>
                  <strong>Country:</strong> {flight.originCountry}
                </p>
                <p>
                  <strong>Latitude:</strong> {flight.latitude}
                </p>
                <p>
                  <strong>Longitude:</strong> {flight.longitude}
                </p>
                <p>
                  <strong>Altitude:</strong> {flight.altitude} ft
                </p>
              </div>
            ))
          ) : (
            <p>No live flights available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
