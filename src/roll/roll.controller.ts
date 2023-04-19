import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { RollService } from './roll.service';

@Controller('roll')
export class RollController {
    constructor(private rollService:RollService) { }

    @Get()
    rollDice(
        @Query('dice', ParseIntPipe) dice: number,
        @Query('bonus', ParseIntPipe) bonus: number) {
        return this.rollService.rollDice(dice, bonus);
    }

    @Get('/advantage')
    rollAdvantage(
        @Query('dice', ParseIntPipe) dice: number,
        @Query('bonus', ParseIntPipe) bonus: number) {
        return this.rollService.rollAdvantage(dice, bonus);
    }

    @Get('/disadvantage')
    rollDisdvantage(
        @Query('dice', ParseIntPipe) dice: number,
        @Query('bonus', ParseIntPipe) bonus: number) {
        return this.rollService.rollDisadvantage(dice, bonus);
    }

}
