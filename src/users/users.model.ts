import { PostModel } from '../posts/post.model';
import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.model';
import { Column, DataType, Model, Table, BelongsToMany, HasMany } from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs > {

    @ApiProperty({example: '1', description: 'Unical id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @ApiProperty({example: 'user@gmail.com', description: 'Email address'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    @ApiProperty({example: '123qwerty', description: 'User password'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    @ApiProperty({example: true, description: 'banned'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => PostModel)
    posts: PostModel[];
}