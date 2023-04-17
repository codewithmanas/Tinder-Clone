import axios from "axios";
import { BASE_URL } from "./helper.js";

const instance = axios.create({
    // baseURL : "https://tinder-backend-codewithmanas.onrender.com",
    baseURL : BASE_URL,
});

export default instance;