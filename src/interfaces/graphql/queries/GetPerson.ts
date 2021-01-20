import { ApolloError } from 'apollo-server-express';
import IApolloContext from '/src/IApolloContext';
import IGetPersonQuery from '/src/domain/queries/IGetPersonQuery';
import Person from '/src/domain/models/Person';
import PersonNotFoundError from '../../../domain/errors/PersonNotFoundError';

export default async function GetPerson(parent: void, args: string, context: IApolloContext): Promise<Person[]> {
  const getPersonQuery: IGetPersonQuery = context.container.resolve('getPersonQuery');
  try {
    return await getPersonQuery.execute(args);
  } catch (e) {
     if (e instanceof PersonNotFoundError) {
      throw new ApolloError(e.message, '404');
    } 
    throw e;
  }
}
