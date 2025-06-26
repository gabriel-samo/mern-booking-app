import "dotenv/config";

export default {
  app: {
    frontendUrl: process.env.FRONTEND_URL
  },
  dbConnection: process.env.MONGODB_CONNECTION_STRING,
  jwt: {
    secret: process.env.JWT_SECRET_KEY,
    expires: process.env.JWT_EXPIRES
  }
};
