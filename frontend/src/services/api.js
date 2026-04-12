import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const createRide = (data) => api.post("/rides", data);
export const getRides = () => api.get("/rides");