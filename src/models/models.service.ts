import { BadRequestException, Injectable } from '@nestjs/common';
import { ModelDocument, Model as CarModel } from './models.schema';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, ObjectId } from 'mongoose';
import { Make, MakeDocument } from 'src/makes/make.schema';
import { CreateModelDto } from './CreateModelDto';

@Injectable()
export class ModelsService {

    constructor(@InjectModel(CarModel.name) private makeModel: Model<ModelDocument>, @InjectModel(Make.name) private make: Model<MakeDocument>) { }

    async findAll(): Promise<CarModel[]> {
        return await this.makeModel.find({})
    }

    async findOne(id: ObjectId): Promise<CarModel> {
        return await this.makeModel.findOne({ _id: id })
    }

    async findAllByManufacturer(makeAbbreviation: string): Promise<CarModel[]> {
        const foundMake = await this.make.findOne({ abbreviation: makeAbbreviation })
        return await this.makeModel.find({ makeId: foundMake._id })
    }

    async addOne(modelData: CreateModelDto) {

        if (!modelData.name) throw new BadRequestException({ error: "Please provide a name for the model." })
        if (!modelData.productionStart) throw new BadRequestException({ error: "Please provide the production start year for the model." })
        if (modelData.productionStart < 1920 || modelData.productionStart > 2023) throw new BadRequestException({ error: "Please provide a valid production start year (between 1920 and 2023)." })
        if (!modelData.abbreviation) throw new BadRequestException({ error: "Please provide a common name for the model." })
        if (!modelData.image) throw new BadRequestException({ error: 'Please provide an image for the model.' })
        if (!modelData.make) throw new BadRequestException({ error: "Please provide a manufacturer." })
        if (modelData.make !== "BMW" && modelData.make !== "Toyota" && modelData.make !== "Mercedes" && modelData.make !== "Ford" && modelData.make !== "Audi" && modelData.make !== "VW") throw new BadRequestException({ message: "Please provide a valid manufacturer (BMW, Mercedes, Toyota, VW, Audi or Ford)" })

        const foundMake = await this.make.findOne({ abbreviation: modelData.make })
        const newModel = new this.makeModel({ name: modelData.name, abbreviation: modelData.abbreviation, image: modelData.image, productionStart: modelData.productionStart, makeId: foundMake._id })
        await newModel.save()
        return newModel
    }

    async deleteOne(id: ObjectId): Promise<object> {
        if (!isValidObjectId(id)) throw new BadRequestException({ error: "Please provide a valid model id" })
        const deletedModel = await this.makeModel.findOneAndDelete(id)
        return { message: "Successfully deleted a model." }
    }

    async updateOne(id: ObjectId, modelData: CreateModelDto): Promise<CarModel> {

        if (!modelData.name) throw new BadRequestException({ error: "Please provide a name for the model." })
        if (!modelData.productionStart) throw new BadRequestException({ error: "Please provide the production start year for the model." })
        if (modelData.productionStart < 1920 || modelData.productionStart > 2023) throw new BadRequestException({ error: "Please provide a valid production start year (between 1920 and 2023)." })
        if (!modelData.abbreviation) throw new BadRequestException({ error: "Please provide a common name for the model." })
        if (!modelData.image) throw new BadRequestException({ error: 'Please provide an image for the model.' })
        if (!modelData.make) throw new BadRequestException({ error: "Please provide a manufacturer." })
        if (modelData.make !== "BMW" && modelData.make !== "Toyota" && modelData.make !== "Mercedes" && modelData.make !== "Ford" && modelData.make !== "Audi" && modelData.make !== "VW") throw new BadRequestException({ message: "Please provide a valid manufacturer (BMW, Mercedes, Toyota, VW, Audi or Ford)" })

        const foundMake = await this.make.findOne({ abbreviation: modelData.make })
        return await this.makeModel.findOneAndUpdate({ _id: id }, { name: modelData.name, abbreviation: modelData.abbreviation, image: modelData.image, productionStart: modelData.productionStart, makeId: foundMake._id })

    }


}


