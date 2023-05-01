import { Role } from './../roles/roles.model';
import { UserRoles } from './../roles/user-roles.model';
import { RolesModule } from './../roles/roles.module';
import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { PostModel } from '../posts/post.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, Role, PostModel, UserRoles]),
    forwardRef(() => AuthModule),
    RolesModule
  ]
})
export class PostsModule {}
