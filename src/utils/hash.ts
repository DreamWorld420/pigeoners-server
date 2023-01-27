import bcrypt from "bcrypt";

export const hash12Rounds = (text: string) => {
	return bcrypt.hash(text, 12);
};
