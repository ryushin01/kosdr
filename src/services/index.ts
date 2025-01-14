import { baseURL } from "@constants/env";
import axios from "axios";

export const createAxiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});
