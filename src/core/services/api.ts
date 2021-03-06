import axios from "axios";

export const baseURL = process.env.BASE_URL

export const api = axios.create({
  baseURL: baseURL
});
