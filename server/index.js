const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);



// where login should redirect to:
    // http://localhost:5000/auth/google/callback

// Google API no longer exists