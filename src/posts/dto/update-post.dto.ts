import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {


    @ApiProperty({example: "post title", description: 'post title'})
    readonly title: string;
    
    @ApiProperty({example: "post id", description: 'post id'})
    readonly id: number;

    @ApiProperty({example: "content body", description: 'str'})
    readonly body: string;

    @ApiProperty({example: "role id", description: 'role id'})
    readonly userId: number;

}