import { UserRoles } from './user-roles.model';
import { User } from 'src/users/users.model';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}
