import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Make, MakeDocument } from './make.schema';

@Injectable()
export class MakesService {
    constructor(@InjectModel(Make.name) private makeModel: Model<MakeDocument>) { }

    async findAll(): Promise<Make[]> {
        return await this.makeModel.find({})
    }

}
