import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ContentTypesDataSource} from '../datasources';
import {ContentTypes, ContentTypesRelations} from '../models';

export class ContentTypesRepository extends DefaultCrudRepository<
  ContentTypes,
  typeof ContentTypes.prototype.UUID,
  ContentTypesRelations
> {
  constructor(
    @inject('datasources.content_types') dataSource: ContentTypesDataSource,
  ) {
    super(ContentTypes, dataSource);
  }
}
