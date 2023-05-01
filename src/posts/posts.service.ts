import { UpdatePostDto } from './dto/update-post.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PostModel } from './post.model';


@Injectable()
export class PostsService {

    constructor(@InjectModel(PostModel) private postRepository: typeof PostModel) { }

    async create(dto: CreatePostDto, content: string) {
        const post = await this.postRepository.create({ ...dto, content });
        return post;
    }

    async getAllPosts() {
        const posts = await this.postRepository.findAll({ include: { all: true } });
        return posts;
    }

    async getPost(value: number) {
        const posts = await this.postRepository.findAll({where: {value}})
        return posts;

    }

    async deletePost(value: number) {
        const post = await this.postRepository.destroy({where: { value}})
        return "Post deleted";
    }

    async updatePost(dto: UpdatePostDto, content: string) {

        const post = await this.postRepository.findOne({where : {id: dto.id}})
        if(!post) {
            throw new HttpException('Post not found', HttpStatus.NOT_FOUND)
        }

        const result = await this.postRepository.upsert({...dto, content})
        return result.filter(element => element != null);
    }
}
