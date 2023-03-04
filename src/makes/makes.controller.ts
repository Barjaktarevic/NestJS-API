import { Controller, Get } from '@nestjs/common';
import { Make } from './make.schema';
import { MakesService } from './makes.service';

@Controller()
export class MakesController {
    constructor(private readonly makesService: MakesService) { }

    @Get("/makes")
    findAll(): Promise<Make[]> {
        return this.makesService.findAll()
    }

    @Get("/makes/:make")
    findOne(): void {
        console.log("bla")
    }
}
