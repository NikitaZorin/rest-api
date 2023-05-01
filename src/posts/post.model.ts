import { User } from 'src/users/users.model';
import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger';

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
}

@Table({tableName: 'posts'})
export class PostModel extends Model<PostModel, PostCreationAttrs > {

    @ApiProperty({example: '1', description: 'Unical id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@gmail.com', description: 'Email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'content text', description: 'content text'})
    @Column({type: DataType.STRING, allowNull: false})
    body: string;

    @ApiProperty({example: '1', description: 'Post id'})
    @Column({type: DataType.INTEGER, unique: true})
    postId: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User

}