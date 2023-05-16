import { Resolver, Query, Args } from '@nestjs/graphql';
import { GetBiInfoService } from 'src/app/services/get-bi-info.service';
import { JSONObjectResolver, JSONResolver } from 'graphql-scalars';

@Resolver()
export default class GetBiInformationsResolver {
  @Query(() => JSONResolver)
  async personalInformations(@Args('bi') bi: string): Promise<any> {
    const service = new GetBiInfoService();
    const people = await service.execute({ bi });

    return Object(people);
  }
}
