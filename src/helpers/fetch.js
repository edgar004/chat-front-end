import dotenv from 'dotenv';
dotenv.config();

const REACT_APP_API_URL = 'http://localhost:8080/api/v1/';

export const get = (url) => {

  const bodyOpts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  console.log("ruta",`${REACT_APP_API_URL}${url}`);
  return fetch(`${REACT_APP_API_URL}${url}`, bodyOpts);
};

export const post = (url, body = {}) => {
  const bodyOpts = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(`${REACT_APP_API_URL}${url}`, bodyOpts);
};

export const put = (url, body = {}) => {

  const bodyOpts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(`${REACT_APP_API_URL}${url}`, bodyOpts);
};

export const remove = (url, body = {}) => {

  const bodyOpts = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(`${REACT_APP_API_URL}${url}`, bodyOpts);
};
