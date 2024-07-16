import axios from "axios";
import config from "../../config";

const baseURL = `${config.baseURLStripe}`;
console.log(baseURL);
const serviceProvider = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*'
  },
});
serviceProvider?.interceptors?.response.use(
  async (res: any) => res?.data,
  async (err: any) => {
    return Promise.reject(err?.response?.data);
  }
);

// Request interceptors for API calls
// Add a request interceptor
// serviceProvider?.interceptors?.request.use(function (request) {
//   const endpointurl = request.url;
//   const stripe_url: any = process.env.NEXT_PUBLIC_BASE_URL_STRIPE;
//   if (endpointurl?.includes(stripe_url)) {
//     request.withCredentials = false;
//   } else {
//     request.withCredentials = true;
//   }
//   return request;
// });

export default serviceProvider;
