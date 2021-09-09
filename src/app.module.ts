import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { UserModule } from '@app/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://username:1q2w3e4r@cluster0.9lkcz.mongodb.net/users',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
