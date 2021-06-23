import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//import { UserController } from './User/user.controller';
import { UserModule } from './Api/V1/User/user.module';

@Module({
  imports: [UserModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
