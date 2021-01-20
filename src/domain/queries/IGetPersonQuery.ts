// @typescript
import Person from '/src/domain/models/Person';

export default interface IGetPersonQuery {
  execute(partFirstname: string): Promise<Person[]>
}
