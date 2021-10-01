import axios from "axios";

export default axios.create({
  baseURL: "http://10.0.0.4",
  headers: {
    "Content-type": "application/json",
  },
});
