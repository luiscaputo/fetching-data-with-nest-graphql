import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphqlResolversModule } from './infra/graphql.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
      installSubscriptionHandlers: true,
      formatError: (error) => {
        return {
          message: error.message,
        };
      },
    }),
    GraphqlResolversModule,
  ],
  controllers: [],
})
export class AppModule {}
