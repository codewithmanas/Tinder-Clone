import axios from "axios";
import { BASE_URL } from "./helper.js";

const instance = axios.create({
    baseURL : BASE_URL,
});

export default instance;