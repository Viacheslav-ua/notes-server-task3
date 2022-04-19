import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { StatisticService } from './statistic.service'

@ApiTags('Stats')
@Controller('notes/stats')
export class StatisticController {


  constructor(private statisticService: StatisticService) { }
  
    @ApiOperation({ summary: 'Get statistics' })
    @ApiResponse({ status: 200, type: [Object] })
  @Get()
  stats() {
    return this.statisticService.getStatistic()
  }
}
