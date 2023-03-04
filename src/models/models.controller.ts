import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Model as CarModel } from './models.schema';
import { ModelsService } from './models.service';
import { CreateModelDto } from './CreateModelDto';

@Controller()
export class ModelsController {
    constructor(private readonly modelsService: ModelsService) { }

    @Get('/models')
    findAll(): Promise<CarModel[]> {
        return this.modelsService.findAll()
    }

    @Get('/models/:id')
    findOne(@Param('id') id: ObjectId): Promise<CarModel> {
        return this.modelsService.findOne(id)
    }

    @Get('/models/make/:make')
    findAllByManufacture(@Param('make') make: string): Promise<CarModel[]> {
        return this.modelsService.findAllByManufacturer(make)
    }

    @Post('/models')
    addOne(@Body() modelData: CreateModelDto): Promise<CarModel> {
        return this.modelsService.addOne(modelData)
    }

    @Delete('/models/:id')
    deleteOne(@Param('id') id: ObjectId): Promise<object> {
        return this.modelsService.deleteOne(id)
    }

    @Patch('/models/:id')
    updateOne(@Param('id') id: ObjectId, @Body() modelData: CreateModelDto): Promise<CarModel> {
        return this.modelsService.updateOne(id, modelData)
    }

}
