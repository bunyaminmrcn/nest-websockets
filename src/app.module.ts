import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ChatModule } from './chat/chat.module';
import { join } from 'path';

@Module({
  imports: [
    ChatModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend', 'build'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
