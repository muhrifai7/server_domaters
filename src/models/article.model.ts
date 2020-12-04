import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, postgresql: {schema: 'public', table: 'article'}}
})
export class Article extends Entity {
  @property({
    type: 'number',
    generated: false,
    scale: 0,
    id: 1,
    postgresql: {columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'title', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  title: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'subtitle', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  subtitle?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'desc', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  desc?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'author', dataType: 'text', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  author?: string;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {columnName: 'published', dataType: 'boolean', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  published: boolean;

  @property({
    type: 'date',
    postgresql: {columnName: 'createdat', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  createdat?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'updatedat', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  updatedat?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
