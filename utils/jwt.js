import Jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const createSecretToken = (payload) => {
  return Jwt.sign({ payload }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export { createSecretToken };
