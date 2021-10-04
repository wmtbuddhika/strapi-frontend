import axios from "axios";

export default axios.create({
  baseURL: "https://strapiadmin.z01.azurefd.net",
  headers: {
    "Content-type": "application/json",
  },
});
