const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

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

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'))

const PORT = process.env.PORT || 5000;
app.listen(PORT);



// where login should redirect to:
    // http://localhost:5000/auth/google/callback

// Google API no longer exists



//https://accounts.google.com/o/oauth2/v2/auth?
//response_type=code&

//redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
//scope=profile%20email&

//client_id=186756091413-9n4r5nidau5i03hbs08vvh7n5569hr3f.apps.googleusercontent.com