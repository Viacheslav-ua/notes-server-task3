import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/category/category.module';
import { NotesModule } from 'src/notes/notes.module';
import { StatisticController } from './statistic.controller';
import { StatisticService } from './statistic.service';

@Module({
  controllers: [StatisticController],
  providers: [StatisticService],
  imports: [CategoryModule, NotesModule],
})
export class StatisticModule {}
