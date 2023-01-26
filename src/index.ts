import express from "express";
import loader from "./loaders";
import config from "./config";

(async () => {
	const app = express();

	await loader(app, {
		syncMode: "force",
	});

	app.listen(config.server.port, () => {
		console.log("server listening");
	});
})();
