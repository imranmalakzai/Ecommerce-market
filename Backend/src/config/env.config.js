import dotenv from "dotenv";

dotenv.config({ path: `.env.${"development" || "production"}.local` });

export const {
  PORT,
  MONGODB_URI,
  DB_NAME,
  ALLOWED_CORS_ORIGIN,
  ACCESS_TOKEN_EXPIRY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRY,
  REFRESH_TOKEN_SECRET,
  NODE_ENV,
  SELLER_EMAIL,
  SELLER_PASSWORD,
  SEllER_TOKEN_SECRET,
  SEllER_TOKEN_EXPIRY,
  MONGODB_URI_ATLAS,
} = process.env;
