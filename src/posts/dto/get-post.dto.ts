import { ApiProperty } from '@nestjs/swagger';

export class GetPostDto {

    @ApiProperty({example: "5", description: 'postId'})
    readonly postId: number;
    @ApiProperty({example: "5", description: 'userId'})
    readonly userId: number

}