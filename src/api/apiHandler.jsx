import axios from "axios";

const url = "http://localhost:8888";

export const createProduct = infos => axios.post(`${url}/api/product`, infos);

export const getProduct = id => axios.get(`${url}/api/product/${id}`);

export const getAllProducts = () => axios.get(`${url}/api/product`);

//-------------------------------------------------------------------

export const getSuggestion = id => axios.get(`${url}/api/category/${id}`);

//-------------------------------------------------------------------

export default {
  createProduct,
  getProduct,
  getAllProducts,
  getSuggestion
};
