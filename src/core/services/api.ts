import axios from "axios";
import { getToken } from "../hooks";

export const baseURL = process.env.BASE_URL
const token:string = getToken();

console.log(token);

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': "Bearer "+token,
  },
});
