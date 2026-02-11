import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import User from "../models/User";
import { hashPass } from "../utils/auth";

export const createAccount = async (req: Request, res: Response) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  const { email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error("Email ya registrado.");
    return res.status(409).json({ error: error.message });
  }

  const handle = slug(req.body.handle, "");
  const handleExist = await User.findOne({ handle });
  if (handleExist) {
    const error = new Error("Nombre de usuario no disponible.");
    return res.status(409).json({ error: error.message });
  }

  const user = new User(req.body);
  user.password = await hashPass(password);
  user.handle = handle;
  console.log(slug(handle, ""));
  await user.save();
  res.status(201).send("Registro creado :D");
};
