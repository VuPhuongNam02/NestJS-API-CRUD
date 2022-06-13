import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {

    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    avatar: string;
}
