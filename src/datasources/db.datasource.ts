import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  // url: 'postgres://postgres:root@localhost/testdb',
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: 'testdb',
  debug:true,
  min: 5,
  max: 200,
  idleTimeoutMillis: 60000,
  ssl: false
  //server
  // name: 'db',
  // connector: 'postgresql',
  // host: 'ec2-23-23-88-216.compute-1.amazonaws.com',
  // port: 5432,
  // user: 'xsktxgyoulnvdr',
  // password: 'a7070abcbf10953c54596fd3f45b07b15f457d775ec85ca55fe8c9468f160126',
  // database: 'detonloch1ev4n',
  // debug:true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
