import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  nombre: String,
  apellidos: String,
  email: String,
  password: String,
  estado: Boolean,
  rol: String,
  createdAt: { type: Date, default: Date.now },
});
