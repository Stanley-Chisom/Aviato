import { useState, useEffect } from "react";
import { getLiveFlights } from "../api/flightApi";
import { toast } from "react-toastify";

export default function LiveFlights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchLiveFlights = async () => {
      try {
        const data = await getLiveFlights();
        setFlights(data.flights);
      } catch (error) {
        toast.error("Error fetching live flights", error);
      }
    };
    fetchLiveFlights();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Live Flight Tracker</h1>
      <div className="mt-4 border p-3">
        {flights.length === 0 ? (
          <p>No live flights available</p>
        ) : (
          flights.map((flight, index) => (
            <div key={index} className="border-b p-2">
              <p>
                <strong>ICAO:</strong> {flight.icao}
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
        )}
      </div>
    </div>
  );
}
