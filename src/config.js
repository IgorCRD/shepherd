const config = {
  githubOauthUrl: clientId =>
    `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user%20user:email%20admin:repo_hook`,
  githubOauthRedirectUrl: 'https://shepherdy.herokuapp.com/authentication',
  clientId: '213e2fe09d8d983e11d8',
};

export default config;
