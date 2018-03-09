class ShepherdAPI {
  url = 'https://shepherd-alpha.herokuapp.com/api';

  authenticateAndFetchUser = (code) => {
    const getUserURL = `${this.url}/user/authenticate`;

    return fetch(getUserURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify({ code }),
    }).then(resp => resp.json());
  };

  fetchUser = (id) => {
    const fetchUserURL = `${this.url}/user/${id}`;

    return fetch(fetchUserURL, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      mode: 'cors',
      cache: 'default',
    }).then(resp => resp.json());
  };
}

export default new ShepherdAPI();
