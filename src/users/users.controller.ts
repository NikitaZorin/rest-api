import { BanUserDto } from './dto/ban-user.dto';
import { RolesGuard } from './../auth/roles.guards';
import { Controller, Post, Body, Get, UseGuards, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './users.model';
import { Roles } from 'src/auth/roles-auth.decorator';
import { AddRoleDto } from './dto/add-role.dto';


@ApiResponse({status: 403})
@ApiResponse({status: 500})
@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: "Register user"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto ) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: "Delete user"})
    @ApiResponse({status: 200, type: User})
    @Delete('/:value')
    delete(@Param('value') value: string ) {
        return this.usersService.deleteUser(value);
    }

    @ApiOperation({summary: "Get all users"})
    @ApiResponse({status: 200, type: [User]})
    @Roles('admin')
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiTags('Roles')
    @ApiOperation({summary: "Give roles"})
    @ApiResponse({status: 200})
    @Roles('admin')
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: "Ban user"})
    @ApiResponse({status: 200})
    @Roles('admin')
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }
}
