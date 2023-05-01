import { AuthModule } from './../auth/auth.module';
import { RolesModule } from './../roles/roles.module';
import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.model';
import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { PostModel } from '../posts/post.model';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, PostModel]),
    RolesModule,
    forwardRef(() => AuthModule)
  ],
  exports: [UsersService]
})
export class UsersModule {}
