import { IResolvers } from 'graphql-tools';
import GetLunchBox from '../../interfaces/graphql/queries/GetLunchBox';
import GetPerson from '../../interfaces/graphql/queries/GetPerson';
import CreateLunchBox from '../../interfaces/graphql/operations/CreateLunchBox';

const resolvers: IResolvers = {
  Query: {
    getLunchBoxByOwner: GetLunchBox,
    getPersonByPartFirstName: GetPerson
  },
  Mutation: {
    createLunchBox: CreateLunchBox,
  }
};

export default resolvers;
