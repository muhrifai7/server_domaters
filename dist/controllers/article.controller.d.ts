import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Article } from '../models';
import { ArticleRepository } from '../repositories';
export declare class ArticleController {
    articleRepository: ArticleRepository;
    constructor(articleRepository: ArticleRepository);
    create(article: Omit<Article, 'id'>): Promise<Article>;
    count(where?: Where<Article>): Promise<Count>;
    find(filter?: Filter<Article>): Promise<Article[]>;
    updateAll(article: Article, where?: Where<Article>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Article>): Promise<Article>;
    updateById(id: number, article: Article): Promise<void>;
    replaceById(id: number, article: Article): Promise<void>;
    deleteById(id: number): Promise<void>;
}
