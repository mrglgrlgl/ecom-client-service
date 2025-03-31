import api from "@/api/index.js";

const { http } = api;

export default {
    baseUrl: import.meta.env.VITE_APP_AUTH_SERVICE_URL,
    url: "api/products",
  http,

  getProducts(page = 1) {
    return this.http(this.baseUrl).post(`${this.url}/?page=${page}`);
  },
};