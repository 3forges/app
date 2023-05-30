import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ContentTypes} from '../models';
import {ContentTypesRepository} from '../repositories';

export class ContentTypesController {
  constructor(
    @repository(ContentTypesRepository)
    public contentTypesRepository : ContentTypesRepository,
  ) {}

  @post('/content-types')
  @response(200, {
    description: 'ContentTypes model instance',
    content: {'application/json': {schema: getModelSchemaRef(ContentTypes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContentTypes, {
            title: 'NewContentTypes',
            
          }),
        },
      },
    })
    contentTypes: ContentTypes,
  ): Promise<ContentTypes> {
    return this.contentTypesRepository.create(contentTypes);
  }

  @get('/content-types/count')
  @response(200, {
    description: 'ContentTypes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ContentTypes) where?: Where<ContentTypes>,
  ): Promise<Count> {
    return this.contentTypesRepository.count(where);
  }

  @get('/content-types')
  @response(200, {
    description: 'Array of ContentTypes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ContentTypes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ContentTypes) filter?: Filter<ContentTypes>,
  ): Promise<ContentTypes[]> {
    return this.contentTypesRepository.find(filter);
  }

  @patch('/content-types')
  @response(200, {
    description: 'ContentTypes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContentTypes, {partial: true}),
        },
      },
    })
    contentTypes: ContentTypes,
    @param.where(ContentTypes) where?: Where<ContentTypes>,
  ): Promise<Count> {
    return this.contentTypesRepository.updateAll(contentTypes, where);
  }

  @get('/content-types/{id}')
  @response(200, {
    description: 'ContentTypes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ContentTypes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ContentTypes, {exclude: 'where'}) filter?: FilterExcludingWhere<ContentTypes>
  ): Promise<ContentTypes> {
    return this.contentTypesRepository.findById(id, filter);
  }

  @patch('/content-types/{id}')
  @response(204, {
    description: 'ContentTypes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContentTypes, {partial: true}),
        },
      },
    })
    contentTypes: ContentTypes,
  ): Promise<void> {
    await this.contentTypesRepository.updateById(id, contentTypes);
  }

  @put('/content-types/{id}')
  @response(204, {
    description: 'ContentTypes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() contentTypes: ContentTypes,
  ): Promise<void> {
    await this.contentTypesRepository.replaceById(id, contentTypes);
  }

  @del('/content-types/{id}')
  @response(204, {
    description: 'ContentTypes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.contentTypesRepository.deleteById(id);
  }
}
