// @typescript
import Person from '/src/domain/models/Person';

export default interface IGetPersonQuery {
  execute(partFirstName: string): Promise<Person[]>
}
