import bcrypt from "bcrypt";

export const hashPass = async (password: string) => {
  const salt = await bcrypt.genSalt(11);
  return await bcrypt.hash(password, salt);
};
