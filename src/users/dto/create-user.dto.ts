import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty({example: "user@gmail.com", description: 'Email'})
    readonly email: string;
    @ApiProperty({example: "123qwerty", description: 'password'})
    readonly password: string;
    @ApiProperty({example: "admin/user", description: 'role'})
    readonly role: string
}