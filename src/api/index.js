import axios from "axios";

export const baseURL = "https://fakestoreapi.com/";

export const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
