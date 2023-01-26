import express, { Express } from "express";
import v1Router from "@/api/v1/routes";

export default (app: Express) => {
	app.use(express.json());
	app.use("/api/v1", v1Router);
};
