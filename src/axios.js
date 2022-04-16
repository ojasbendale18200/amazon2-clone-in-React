import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e2-clone/us-central1/api",
});

export default instance;
