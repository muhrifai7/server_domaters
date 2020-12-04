import { Entity } from '@loopback/repository';
export declare class Article extends Entity {
    id: number;
    title: string;
    subtitle?: string;
    desc?: string;
    author?: string;
    categories?: string;
    image_url?: string;
    technology?: string;
    meta_image?: string;
    conclusion?: string;
    last_description?: string;
    published: boolean;
    createdat?: string;
    updatedat?: string;
    [prop: string]: any;
    constructor(data?: Partial<Article>);
}
export interface ArticleRelations {
}
export declare type ArticleWithRelations = Article & ArticleRelations;
