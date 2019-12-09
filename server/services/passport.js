const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken)
            console.log('refresh token', refreshToken)
            console.log('profile:', profile)
            // token that appears when user logs in
            // 'ya29.Il-xB6pjy050Furqo4-sOVTbXnTOxCIGmu3g48W9TYnyb08O
            // w-HC8mF6PG1F4BGr4HjJfRCFcywllxLmf9VXYR6wTxTeAzMMGLr8b
            // TWjfksiD4yFlGoHMWQcmF7n8bXSKA'
        }
    )
);