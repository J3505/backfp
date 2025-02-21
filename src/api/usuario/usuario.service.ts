import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel('usuario') private usuarioModal) {}

  async createUsuario(data: any) {
    // return data;

    try {
      const _usuarios = await this.usuarioModal.find({ email: data.email });

      if (_usuarios.length >= 1) {
        return { data: undefined, message: 'El correo esta en uso' };
      } else {
        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(data.password, salt);

        data.password = hash;
        const usuario = await this.usuarioModal.create(data);
        return usuario;
      }
    } catch (error) {
      console.log(error);

      return { data: undefined, message: 'No se pudo crear el user' };
    }
  }
}
// npm i bcrypt
