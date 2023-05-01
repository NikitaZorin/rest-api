import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Controller, Body, Get, Post, Param, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Role } from './roles.model';


@ApiResponse({status: 403})
@ApiResponse({status: 500})
@ApiTags('Roles')
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: "Create role"})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.roleService.createRole(dto);
    }



    @ApiOperation({summary: "Get role"})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
