import { Module } from '@nestjs/common';
import { ModelsController } from './models.controller';
import { ModelsService } from './models.service';
import { Model, ModelSchema } from './models.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Make, MakeSchema } from 'src/makes/make.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Model.name, schema: ModelSchema }]), MongooseModule.forFeature([{ name: Make.name, schema: MakeSchema }])],
    controllers: [ModelsController],
    providers: [ModelsService],
})
export class ModelsModule { }
