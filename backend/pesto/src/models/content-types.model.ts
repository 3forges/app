import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ContentTypes extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  UUID?: string;

  @property({
    type: 'string',
    default: 'give here a description of the content type (is it jobs? shoes to sell? oranges? apples? tutorials?)',
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ContentTypes>) {
    super(data);
  }
}

export interface ContentTypesRelations {
  // describe navigational properties here
}

export type ContentTypesWithRelations = ContentTypes & ContentTypesRelations;
