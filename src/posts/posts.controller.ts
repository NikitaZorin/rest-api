import { GetPostDto } from './dto/get-post.dto';
import { PostModel } from './post.model';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Controller, Post, Body, Get, Put, Delete, UseGuards, Param } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guards';

@ApiResponse({status: 403})
@ApiResponse({status: 500})
@ApiTags('Posts')
@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) {}


    @ApiOperation({summary: "Create post"})
    @ApiResponse({status: 200, type: PostModel})
    @Post()
    createPost(@Body() dto: CreatePostDto, body: string) {
        return this.postService.create(dto, body)
    }

    @ApiOperation({summary: "Get all posts"})
    @ApiResponse({status: 200})
    @Roles('admin')
    @UseGuards(RolesGuard)
    @Get()
    getPosts() {
        return this.postService.getAllPosts();
    }


    @ApiOperation({summary: "Get post by userId"})
    @ApiResponse({status: 200, type: [GetPostDto]})
    @Get('/user/:value')
    getPostByUser(@Param('value') value: number) {
        return this.postService.getPost(value);
    }


    @ApiOperation({summary: "Get post by postId"})
    @ApiResponse({status: 200, type: [GetPostDto]})
    @Get('/:value')
    getPostByPostId(@Param('value') value: number) {
        return this.postService.getPost(value);
    }

    @ApiOperation({summary: "Delete post by postId"})
    @ApiResponse({status: 200, type: [GetPostDto]})
    @Delete('/:value')
    deletePost(@Param('value') value: number) {
        return this.postService.deletePost(value);
    }
    @ApiOperation({summary: "Delete all posts by userId"})
    @ApiResponse({status: 200, type: [GetPostDto]})
    @Delete('/user/:value')
    deletePostByUser(@Param('value') value: number) {
        return this.postService.deletePost(value);
    }

    @ApiOperation({summary: "Update post by userId"})
    @ApiResponse({status: 200, type: PostModel})
    @Put()
    updatePost(@Body() dto: PostModel, body: string) {
        return this.postService.updatePost(dto, body);
    }

}
