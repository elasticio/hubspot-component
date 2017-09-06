/*eslint no-console: 0*/
'use strict';
const Hubspot = require('hubspot');

// This function will be called by the platform to verify credentials
module.exports = function verifyCredentials(credentials, cb) {
    console.log('Credentials passed for verification %j', credentials);
    const hubspot = new Hubspot({
        clientId: process.env.HUBSPOT_CLIENT_KEY,
        clientSecret: process.env.HUBSPOT_CLIENT_SECRET,
        redirectUri: process.env.HUBSPOT_REDIRECT_URL || "https://app.elastic.io/callback/oauth2",
        refreshToken: credentials.oauth.refresh_token
    });
    return hubspot.refreshAccessToken();
};
