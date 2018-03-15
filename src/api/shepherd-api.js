class ShepherdAPI {
  url = 'http://localhost:3001/api';

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

  getAllCommits = (id) => {
    const getAllCommitsUrl = `${this.url}/user/${id}/monitored/commits`;

    return fetch(getAllCommitsUrl, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      mode: 'cors',
      cache: 'default',
    }).then(resp => resp.json());
  };

  getMonitoredRepos = (id) => {
    const getAllCommitsUrl = `${this.url}/user/${id}/monitored`;

    return fetch(getAllCommitsUrl, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      mode: 'cors',
      cache: 'default',
    }).then(resp => resp.json());
  };

  removeRepo = (userId, repoId) => {
    const removeRepoUrl = `${this.url}/repos/${repoId}?userId=${userId}`;

    return fetch(removeRepoUrl, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      mode: 'cors',
      cache: 'default',
    }).then(resp => resp.json());
  };
}

export default new ShepherdAPI();
