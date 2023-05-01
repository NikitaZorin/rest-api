import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {

    @ApiProperty({example: "role title - admin/user", description: 'id user'})
    readonly value: string;

    @ApiProperty({example: 1, description: 'id user'})
    readonly userId: number
}