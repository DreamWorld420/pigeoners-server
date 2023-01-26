import User from "@/db/models/User";
import bcrypt from "bcrypt";

export default {
	signup: async (username: string, password: string, email: string) => {
		try {
			const hashedPassword = await bcrypt.hash(password, 12);
			const user = await User.create({
				username,
				password: hashedPassword,
				email,
			});
			return user;
		} catch (error) {
			console.error("unable to create user:", error);
		}
	},
};
