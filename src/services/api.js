import axios from "axios";

const BASE_URL = "https://git.heroku.com/mywallet00.git";

function signUp(formData) {
  const promisse = axios.post(`${BASE_URL}/auth/sign-up`, formData);

  return promisse;
}

function signIn(formData) {
  const promisse = axios.post(`${BASE_URL}/auth/sign-in`, formData);

  return promisse;
}

function getTransactions(token)  {
  const promisse = axios.get(`${BASE_URL}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promisse;
}

function saveTransactions(transaction, token)  {
  const promisse = axios.post(`${BASE_URL}/transactions`,
  { 
    ...transaction,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promisse;
}

const api = {
  signUp,
  signIn,
  getTransactions,
  saveTransactions,
}

export default api;