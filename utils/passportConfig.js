const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        console.log("✅ GOOGLE PROFILE RECEIVED:");
        console.log(profile);

        let existingUser = await User.findOne({ googleId: profile.id });

        if (existingUser) {
          console.log("👤 Existing Google user:", existingUser);
          return done(null, existingUser);
        }

        console.log("🆕 Creating new Google user...");

        const newUser = new User({
          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails?.[0]?.value || `${profile.id}@google.com`,
          profilePic: profile.photos?.[0]?.value,
        });

        await newUser.save();

        console.log("✅ New Google user saved:", newUser);

        return done(null, newUser);
      } catch (err) {
        console.error("🔥 GOOGLE STRATEGY ERROR 🔥");
        console.error(err); // full error
        console.error(err.message); // error message
        console.error(err.stack); // stack trace
        return done(err, null);
      }
    }
  )
);
