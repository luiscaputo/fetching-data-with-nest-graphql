import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Response {
  @Field()
  data: Object;
}
