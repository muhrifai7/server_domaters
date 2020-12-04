"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ArticleController = class ArticleController {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    async create(article) {
        return this.articleRepository.create(article);
    }
    async count(where) {
        return this.articleRepository.count(where);
    }
    async find(filter) {
        return this.articleRepository.find(filter);
    }
    async updateAll(article, where) {
        return this.articleRepository.updateAll(article, where);
    }
    async findById(id, filter) {
        return this.articleRepository.findById(id, filter);
    }
    async updateById(id, article) {
        await this.articleRepository.updateById(id, article);
    }
    async replaceById(id, article) {
        await this.articleRepository.replaceById(id, article);
    }
    async deleteById(id) {
        await this.articleRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/articles', {
        responses: {
            '200': {
                description: 'Article model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Article) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Article, {
                    title: 'NewArticle',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/articles/count', {
        responses: {
            '200': {
                description: 'Article model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Article)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/articles', {
        responses: {
            '200': {
                description: 'Array of Article model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Article, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Article)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/articles', {
        responses: {
            '200': {
                description: 'Article PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Article, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Article)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Article, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/articles/{id}', {
        responses: {
            '200': {
                description: 'Article model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Article, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Article, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/articles/{id}', {
        responses: {
            '204': {
                description: 'Article PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Article, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Article]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/articles/{id}', {
        responses: {
            '204': {
                description: 'Article PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Article]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/articles/{id}', {
        responses: {
            '204': {
                description: 'Article DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteById", null);
ArticleController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ArticleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ArticleRepository])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map