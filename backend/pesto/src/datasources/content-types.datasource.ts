import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  // name: 'content_types',
  name: 'ContentTypes',
  connector: 'mongodb',
  // url: 'mongodb://mongo1:30001,mongo2:30002,mongo3:30003/?replicaSet=my-replica-set',
  url: `mongodb://your_admin:your_password@${process.env.PESTO_DB_HOST}:27117,${process.env.PESTO_DB_HOST}:27118/?authMechanism=DEFAULT`,
  host: 'db.pesto.io',
  // port: 30001,
  user: 'your_admin',
  password: 'your_password',
  database: 'PestoDb',
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
    super(dsConfig);
  }
}
