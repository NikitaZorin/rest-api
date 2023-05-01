import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
    @ApiProperty({example: 1, description: 'id user'})
    readonly userId: number;

    @ApiProperty({example: true, description: 'boolean'})
    readonly banned: boolean
}

