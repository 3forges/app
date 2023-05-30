import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  // name: 'content_types',
  name: 'ContentTypes',
  connector: 'mongodb',
  // url: 'mongodb://mongo1:30001,mongo2:30002,mongo3:30003/?replicaSet=my-replica-set',
  /**
   * Note: 
   * 27117 and 27118 are the Mongo Routers for the Shard: that's why we only hit them, and they route properly the requests
   * export MONGO_ROUTER01_PORT=27117
   * export MONGO_ROUTER02_PORT=27118
   */
  url: `mongodb://your_admin:your_password@${process.env.PESTO_DB_HOST}:${process.env.MONGO_ROUTER01_PORT},${process.env.PESTO_DB_HOST}:${process.env.MONGO_ROUTER02_PORT}/?authMechanism=DEFAULT`,
  host: `${process.env.PESTO_DB_HOST}`,
  port: 30001,
  user: 'your_admin',
  password: 'your_password',
  // database: 'PestoDb',
  database: `${process.env.PESTO_DB_NAME}`,
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ContentTypesDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'content_types';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.content_types', {optional: true})
    dsConfig: object = config,
  ) {
    console.log(`config.url = [${config.url}]`)
    super(dsConfig);
  }
}
