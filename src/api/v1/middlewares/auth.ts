import userService from "@/services/User";
import { Controller } from "@/types/express";

const controller: Controller<"signup"> = {
	signup: async (req, res, next) => {
		const { username, password, email } = req.body;
		const user = await userService.signup(username, password, email);

		return res.status(201).json({
			status: "success",
			data: {
				user,
			},
		});
	},
};
export default controller;
