import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type ModelDocument = HydratedDocument<Model>;

@Schema()
export class Model {
    @Prop()
    name: string;

    @Prop()
    abbreviation: string;

    @Prop()
    image: string;

    @Prop()
    productionStart: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Make' })
    makeId: mongoose.ObjectId;

}

export const ModelSchema = SchemaFactory.createForClass(Model);