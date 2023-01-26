import userService from "@/services/User";
import { AuthController } from "@/types/express";

const controller: AuthController = {
	signup: async (req, res, next) => {
		const { username, password, email } = req.body;
		const user = await userService.signup(username, password, email);

		// TODO: remove user password before returning

		return res.status(201).json({
			status: "success",
			data: {
				user,
			},
		});
	},
};

export default controller;
