import axios from "axios";

export const baseURL = process.env.BASE_URL
const token:string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDYzM2M3N2UzOTAzMThhODhmY2UyYSIsImlhdCI6MTY2MTM1MDg2MiwiZXhwIjoxNjY5OTkwODYyfQ.vbgjPv_Td-VovsLE4vyICy7h96iEDw_NN77SnJYl5FQ'

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Authorization': "Bearer "+token,
  },
});
