import { Controller, Post, Res, Req } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}
  @Post('create')
  async createUsuario(@Res() res, @Req() req) {
    const data = req.body;
    const usuario = await this.usuarioService.createUsuario(data);
    res.status(200).send(usuario);
  }
}
