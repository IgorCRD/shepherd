const config = {
  githubOauthUrl: (clientId, redirectUri) =>
    'https://github.com/login/oauth/authorize?' +
    `redirect_uri=${redirectUri}&` +
    `client_id=${clientId}`,
  githubOauthRedirectUrl: 'https://gitswatche.localtunnel.me/authorization',
  clientId: 'ce6230dff8a4e3621b3b',
};

export default config;
