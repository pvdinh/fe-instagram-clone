// export const API_BASE_URL = 'http://localhost:8080/api/v1';
export const API_BASE_URL = 'https://be-meta.herokuapp.com/api/v1';
export const ACCESS_TOKEN = 'accessToken';

// export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect'
export const OAUTH2_REDIRECT_URI = 'https://be-meta.herokuapp.com/oauth2/redirect'

export const FACEBOOK_AUTH_URL = API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;