import IApolloContext from '/src/IApolloContext';
import ICreatePersonOperation from '/src/domain/operations/ICreatePersonOperation';
import ICreatePersonContract from '../../../domain/contracts/CreatePersonContract';

export default async function CreatePerson(parent: void, args: ICreatePersonContract, context: IApolloContext): Promise<boolean> {
  const createPersonOperation: ICreatePersonOperation = context.container.resolve('createPersonOperation');
  try {
    await createPersonOperation.execute(args);
    return true;
  } catch (e) {
    return false;
  }
}
