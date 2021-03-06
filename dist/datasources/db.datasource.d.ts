import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class DbDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
        debug: boolean;
        min: number;
        max: number;
        idleTimeoutMillis: number;
        ssl: boolean;
    };
    constructor(dsConfig?: object);
}
