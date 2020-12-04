"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Article = class Article extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        generated: false,
        scale: 0,
        id: 1,
        postgresql: { columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO' },
    }),
    tslib_1.__metadata("design:type", Number)
], Article.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        postgresql: { columnName: 'title', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "title", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'subtitle', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "subtitle", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'desc', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "desc", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'author', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "author", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'categories', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "categories", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'image_url', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "image_url", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'technology', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "technology", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'meta_image', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "meta_image", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'conclusion', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "conclusion", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        postgresql: { columnName: 'last_description', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "last_description", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        required: true,
        postgresql: { columnName: 'published', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO' },
    }),
    tslib_1.__metadata("design:type", Boolean)
], Article.prototype, "published", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        postgresql: { columnName: 'createdat', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "createdat", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        postgresql: { columnName: 'updatedat', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Article.prototype, "updatedat", void 0);
Article = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, postgresql: { schema: 'public', table: 'article' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Article);
exports.Article = Article;
//# sourceMappingURL=article.model.js.map