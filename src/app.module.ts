import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { UserModule } from '@app/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DB_ACCESS } from '@app/config';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(DB_ACCESS),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
