import { Module } from '@nestjs/common';
import { RollModule } from './roll/roll.module';

@Module({
  imports: [RollModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
