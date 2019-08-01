// create a axios connection targeting our api
import axios from "axios";

var baseURL;

console.log("Hostname = ", window.location.hostname)

switch (window.location.hostname) {
  case "localhost":
  default:
    baseURL = "http://localhost:3001";
    break;
}

//console.log("API using", baseURL)

const API = axios.create({
  baseURL: baseURL,
  //responseType: "json"
});

export default API;