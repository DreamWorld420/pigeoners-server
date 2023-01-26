import dbInstance from "@/db";
import { DatabaseLoaderOptions, SynchronizeMode } from "@/types/sequelize";

export const checkDBConnection = async () => {
	try {
		await dbInstance.authenticate({ logging: false });
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

export const syncDBModels = async (syncMode?: SynchronizeMode) => {
	try {
		console.log("Model synchronization mode:", syncMode || "default");
		await dbInstance.sync({
			force: syncMode === "force" || undefined,
			alter: syncMode === "alter" || undefined,
		});
		console.log("All models were synchronized successfully.");
	} catch (error) {
		console.log("Unable to synchronize models:", error);
	}
};

export default async (dbOptions?: DatabaseLoaderOptions) => {
	await checkDBConnection();
	await syncDBModels(dbOptions?.syncMode);
};
