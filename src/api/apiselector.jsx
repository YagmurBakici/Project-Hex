import axios from "axios";

const APIurl = process.env.REACT_APP_BACKEND_URL + "/selector";

export const getAllselector = () => axios.get(APIurl);

export const deleteselector = id => axios.delete(`${APIurl}/${id}`);
