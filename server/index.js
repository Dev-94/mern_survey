const express = require('express');
require('./services/passport')

const app = express();

require('./routes/authRoutes')(app)

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