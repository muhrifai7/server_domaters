import { Entity } from '@loopback/repository';
export declare class TodoList extends Entity {
    id?: number;
    title?: string;
    color?: string;
    constructor(data?: Partial<TodoList>);
}
export interface TodoListRelations {
}
export declare type TodoListWithRelations = TodoList & TodoListRelations;
