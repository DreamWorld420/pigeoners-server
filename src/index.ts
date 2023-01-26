import express from "express";
import loader from "./loaders";
import config from "./config";

(() => {
	const app = express();

	loader(app);

	app.listen(config.server.port, () => {
		console.log("server listening");
	});
})();
