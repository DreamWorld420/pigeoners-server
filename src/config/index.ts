import path from "path";
import { config } from "dotenv";

config({ path: path.resolve(".", ".env") });

export default {
	app: {
		env: process.env?.APP_ENV,
	},
	db: {
		port: process.env?.DB_PORT,
		user: process.env?.DB_USER,
		pass: process.env?.DB_PASS,
		host: process.env?.DB_HOST,
		name: process.env?.DB_NAME,
	},
	server: {
		port: process.env?.SERVER_PORT,
	},
};
