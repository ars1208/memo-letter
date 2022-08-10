import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://memoletter-backend.herokuapp.com/`,
  });
};
