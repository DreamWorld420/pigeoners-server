import dbInstance from "@/db";

export default async () => {
	try {
		await dbInstance.authenticate({ logging: false });
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};
