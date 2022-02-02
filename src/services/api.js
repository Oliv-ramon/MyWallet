import axios from "axios";

const BASE_URL = "http://localhost:5000";

function signUp(formData) {
  const promisse = axios.post(`${BASE_URL}/sign-up`, formData);

  return promisse;
}

function signIn(formData) {
  const promisse = axios.post(`${BASE_URL}/sign-in`, formData);

  return promisse;
}

const api = {
  signUp,
  signIn,
}

export default api;