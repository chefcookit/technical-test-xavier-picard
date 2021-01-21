// @typescript
import ICreatePersonContract from '../contracts/CreatePersonContract';

export default interface ICreatePersonOperation {
  execute(params: ICreatePersonContract): Promise<void>
}
