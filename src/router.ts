import { Router } from "express";
import { body } from "express-validator";
import { createAccount } from "./handlers";
const router = Router();

// Autenticacion y Registro
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("El handle no puede ir vacío"),
  body("name").notEmpty().withMessage("El nombre no puede ir vacío"),
  body("email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres."),
  createAccount,
);

export default router;
