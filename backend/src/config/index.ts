import "dotenv/config";

export default {
  app: {
    host: process.env.HOST as string,
    port: process.env.PORT as string,
    frontendUrl: process.env.FRONTEND_URL as string
  },
  dbConnection: process.env.MONGODB_CONNECTION_STRING as string,
  jwt: {
    secret: process.env.JWT_SECRET_KEY as string,
    expires: process.env.JWT_EXPIRES as string
  }
};
