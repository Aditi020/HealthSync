console.log("JWT_SECRET in jwt.js:", process.env.JWT_SECRET);

export default {
  accessToken: {
    secret: process.env.JWT_SECRET, 
    expiresIn: '15m', 
  },
  refreshToken: {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: '7d',
  },
};