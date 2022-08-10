import axios from "@/api/index";

export default {
  testGetting() {
    return axios().get("/");
  },
};
