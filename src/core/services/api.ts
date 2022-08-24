import axios from "axios";

export const baseURL = process.env.BASE_URL

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDYyZTFjN2UzOTAzMThhODhmY2RlOSIsImlhdCI6MTY2MTM0OTQxMSwiZXhwIjoxNjY5OTg5NDExfQ.KYx6aTJInmP6WoysO2AUATUlmX7Tc19xfzkqGeIZwOA",
  },
});
