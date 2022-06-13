import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { StudentsService } from './students/students.service';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL),
    StudentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
