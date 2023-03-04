import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MakesController } from './makes.controller';
import { MakesService } from './makes.service';
import { Make, MakeSchema } from './make.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Make.name, schema: MakeSchema }])],
    controllers: [MakesController],
    providers: [MakesService],
})
export class MakesModule { }
