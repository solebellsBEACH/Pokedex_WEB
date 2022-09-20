import axios from "axios";
import { getToken } from "../hooks";

export const baseURL = 'http://localhost:3000/api/'

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': "Bearer "+getToken(),
  },
});
