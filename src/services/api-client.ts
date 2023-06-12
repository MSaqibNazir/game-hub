import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b0fc87665b894b8692386f6125c40c06",
  },
});
