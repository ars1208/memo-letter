import axios from "@/api/index";

export default {
  testGetting() {
    return axios().get("/show");
  },
  doLogin(userId, password) {
    const body = { userId: userId, password: password };
    axios()
      .post("/login", body)
      .then((res) => {
        return res;
        /* this.$store.dispatch("auth", {
          userId: res.body.userId,
          userToken: res.body.userToken,
        }); */
        // this.$router.push(this.$route.query.redirect);
      });
  },
};
