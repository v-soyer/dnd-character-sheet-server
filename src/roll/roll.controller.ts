import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from '@nestjs/common';
import { RollService } from './roll.service';

@Controller('roll')
export class RollController {
    constructor(private rollService:RollService) { }

    @Get()
    rollDice(
        @Query('dice', new DefaultValuePipe(20), ParseIntPipe) dice: number,
        @Query('bonus', new DefaultValuePipe(0), ParseIntPipe) bonus: number) {
        return this.rollService.rollDice(dice, bonus);
    }

    @Get('/advantage')
    rollAdvantage(
        @Query('dice', new DefaultValuePipe(20), ParseIntPipe) dice: number,
        @Query('bonus', new DefaultValuePipe(0), ParseIntPipe) bonus: number) {
        return this.rollService.rollAdvantage(dice, bonus);
    }

    @Get('/disadvantage')
    rollDisdvantage(
        @Query('dice', new DefaultValuePipe(20), ParseIntPipe) dice: number,
        @Query('bonus', new DefaultValuePipe(0), ParseIntPipe) bonus: number) {
        return this.rollService.rollDisadvantage(dice, bonus);
    }

}
