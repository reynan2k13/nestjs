import { ApiProperty } from '@nestjs/swagger';
import {IsNotEmpty } from 'class-validator';

export class projects {

  @ApiProperty()
  name : string

  @ApiProperty()
  test : string
}


export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty()
  @IsNotEmpty()
  email_address: string;

  @ApiProperty()
  @IsNotEmpty()
  facility: string;


  @ApiProperty()
  @IsNotEmpty()
  group_name: string;

  @ApiProperty()
  @IsNotEmpty()
  facility_name: string;


  @ApiProperty()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    isArray: true,
    type: projects
  })
  @IsNotEmpty()
  projects: projects[];


  @ApiProperty()
  @IsNotEmpty()
  menu_access: Array<any>;


  @ApiProperty()
  @IsNotEmpty()
  is_active: boolean;

}


