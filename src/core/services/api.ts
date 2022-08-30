import axios from "axios";
import { getToken } from "../hooks";

export const baseURL = 'https://pokedexapi.herokuapp.com/api/'
const token:string = getToken();

console.log(token);

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': "Bearer "+token,
  },
});
