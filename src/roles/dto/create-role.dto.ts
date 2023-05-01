import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    
    @ApiProperty({example: "role title - admin/user", description: 'id user'})
    readonly value: string;

    @ApiProperty({example: "role description", description: 'string'})
    readonly description: string;
}