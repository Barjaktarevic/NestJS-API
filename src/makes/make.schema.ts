import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MakeDocument = HydratedDocument<Make>;

@Schema()
export class Make {
    @Prop()
    name: string;

    @Prop()
    abbreviation: string;

    @Prop()
    founded: string;

    @Prop()
    headquarters: string;

    @Prop()
    logo: string;

    @Prop()
    description: string;
}

export const MakeSchema = SchemaFactory.createForClass(Make);