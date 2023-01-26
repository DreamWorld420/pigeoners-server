import express from "express";
import loader from "./loaders";

(() => {
	const app = express();

	loader(app);

	app.listen(3000, () => {
		console.log("server listening");
	});
})();
