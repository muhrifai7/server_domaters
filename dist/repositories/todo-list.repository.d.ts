import { DefaultCrudRepository } from '@loopback/repository';
import { TodoList, TodoListRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id, TodoListRelations> {
    constructor(dataSource: DbDataSource);
}
