import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from 'src/schemas/usuarios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'usuario', schema: UsuarioSchema }]),
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
