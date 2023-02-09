import axios from "axios";

export const apiBeUni = axios.create({
  baseURL: "https://api.beuni.com.br/atlas/brands/v2/"
})