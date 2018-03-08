class ShepherdAPI {
  url = 'https://shepherdaapi.localtunnel.me/api/';

  loginAndFetchUser = (code) => {
    const getUserURL = `${this.url}authentication`;

    return fetch(getUserURL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(code),
    }).then(resp => resp.json());
  };
}

export default new ShepherdAPI();
