import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './api/usuario/usuario.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/ferreteria')],
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jordanvilcatumbalobos:6sPTELig5GmIqjpu@ferreteria.jhkhl.mongodb.net/',
    ),
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
