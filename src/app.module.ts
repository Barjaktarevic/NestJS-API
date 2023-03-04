import { Module } from '@nestjs/common';
import { MakesModule } from './makes/makes.module';
import { ModelsModule } from './models/models.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ModelsModule, MakesModule, MongooseModule.forRoot('mongodb://localhost:27017/thedealership')],
  controllers: [],
  providers: [],
})
export class AppModule { }
