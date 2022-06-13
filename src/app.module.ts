import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { StudentsService } from './students/students.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    StudentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
