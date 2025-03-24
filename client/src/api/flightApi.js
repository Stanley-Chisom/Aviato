import axios from "axios";

const API_BASE_URL = " http://127.0.0.1:8080";

export const getFlightInfo = async (flightNumber) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/flight/${flightNumber}`);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch flight details", err);
  }
};

export const getLiveFlights = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/live-flights`);
    return res.data;
  } catch (err) {
    throw new Error("Failed to fetch live flights", err);
  }
};
