import axios from "axios";

const defaultServerUrl = process.env.NEXT_PUBLIC_SERVER_URI;


var api = {
  get defaultServerUrl() {
    if (!axios.defaults.headers.common['Authorization']) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem("token")}`;
    }
    return defaultServerUrl;
  },

  setAccessToken(token: string) {
    // console.log(token)
    sessionStorage.setItem("token", token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
}

export default api;