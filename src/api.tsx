import axios from 'axios';

export const GET_API = (token: string, url: string) =>
  axios
    .get('http://cors-anywhere.herokuapp.com/' + url, {
      headers: { Authorization: token },
    })
    .then((res) => res.data);
