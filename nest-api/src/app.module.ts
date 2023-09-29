import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpCustomService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HttpCustomService],
})
export class AppModule {}
