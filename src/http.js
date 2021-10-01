import axios from "axios";

export default axios.create({
  baseURL: "https://strapi-live-webapp.azurewebsites.net",
  headers: {
    "Content-type": "application/json",
  },
});
