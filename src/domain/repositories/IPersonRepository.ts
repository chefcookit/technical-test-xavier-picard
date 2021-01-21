// @typescript
import Person from '/src/domain/models/Person';

export default interface IPersonRepository {
  getPersonByFirstAndLastName(first: string, last: string): Promise<Person | null>
  getPersonsByPartFirstName(partFirstName: string): Promise<Person[]>
  addPerson(person: Person): Promise<void>
}
