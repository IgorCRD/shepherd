const config = {
  githubOauthUrl: clientId =>
    `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=read:user%20user:email`,
  githubOauthRedirectUrl: 'https://shepherda.localtunnel.me/authorization',
  clientId: '213e2fe09d8d983e11d8',
};

export default config;
