import React from "react";

import { useState } from "react";
import { getFlightInfo } from "../api/flightApi";
import { toast } from "react-toastify";

export default function FlightDetails() {
  const [flightNumber, setFlightNumber] = useState("");
  const [flightData, setFlightData] = useState(null);

  const fetchFlight = async () => {
    try {
      const data = await getFlightInfo(flightNumber);
      setFlightData(data);
    } catch (error) {
      toast.error("Error fetching flight details", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Aviato ✈</h1>
      <input
        type="text"
        placeholder="Enter Flight Number"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={fetchFlight}
        className="ml-2 bg-black w-24 text-white p-2 rounded"
      >
        Search
      </button>
      {flightData && (
        <div className="mt-4 border p-3">
          <h2 className="font-bold">Flight Details</h2>
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
    </div>
  );
}
