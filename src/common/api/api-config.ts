import axios from "axios";

export const defaultServerUrl = process.env.NEXT_PUBLIC_SERVER_URI;


var api = {
  get defaultServerUrl() {
    if (!axios.defaults.headers.common['Authorization']) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.getItem("token")}`;
    }
    return defaultServerUrl;
  },

  setAccessToken(token: string) {
    sessionStorage.setItem("token", token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },

  setJwtToken(jwtToken: string) {
    sessionStorage.setItem("jwtToken", jwtToken);
  }
}

export default api;