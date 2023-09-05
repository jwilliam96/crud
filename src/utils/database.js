import { Sequelize } from "sequelize";
import "dotenv/config";

const db = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME, // es el nombre de la database que creas en postgres
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
});

export default db;
