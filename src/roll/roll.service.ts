import { Injectable } from '@nestjs/common';

@Injectable()
export class RollService {

    rollDice(dice: number, bonus: number) {
        const roll = Math.floor(Math.random() * dice) + 1;
        const value = roll + bonus;

        const result = {
            dice: "d" + String(dice),
            bonus: bonus,
            roll: roll,
            value: value,
        }

        return (result);
    }

    rollAdvantage(dice: number, bonus: number) {
        const roll1 = this.rollDice(dice, bonus)
        const roll2 = this.rollDice(dice, bonus)

        const result = {
            roll1: roll1,
            roll2: roll2,
            value: roll1.value > roll2.value ? roll1.value : roll2.value
        }

        return (result);
    }

    rollDisadvantage(dice: number, bonus: number) {
        const roll1 = this.rollDice(dice, bonus)
        const roll2 = this.rollDice(dice, bonus)

        const result = {
            roll1: roll1,
            roll2: roll2,
            value: roll1.value < roll2.value ? roll1.value : roll2.value
        }

        return (result);
    }
}
