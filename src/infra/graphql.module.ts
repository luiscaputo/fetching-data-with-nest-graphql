import { Module } from '@nestjs/common';
import { GetBiInfoService } from 'src/app/services/get-bi-info.service';
import GetBiInformationsResolver from './resolvers/get-bi-informations.resolver';

@Module({
  providers: [GetBiInfoService, GetBiInformationsResolver],
})
export class GraphqlResolversModule {}
