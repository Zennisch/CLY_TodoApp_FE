import axios from "axios";
import { BACKEND_URL } from "../types/environment";

const API_URL = `${BACKEND_URL}/api/v1`;
const TIMEOUT = 10000;
const CONTENT_TYPE = "application/json";

export const setupAxios = async () => {
    axios.defaults.baseURL = API_URL;
    axios.defaults.timeout = TIMEOUT;
    axios.defaults.headers.common["Content-Type"] = CONTENT_TYPE;
    axios.defaults.headers.common["Accept"] = CONTENT_TYPE;
    axios.defaults.withCredentials = false;

    axios.interceptors.request.use(
        (config) => {
            console.log(`[Request]: ${config.method?.toUpperCase()} ${config.url}`);
            return config;
        },
        (error) => {
            console.error("Request error:", error);
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            console.log(`[Response]: ${response.status} ${response.config.url}`);
            return response;
        },
        (error) => {
            if (error.response) {
                console.error(`[Response Error]: ${error.response.status} ${error.response.config.url}`);
            } else {
                console.error("Response error:", error.message);
            }
            return Promise.reject(error);
        }
    );
}