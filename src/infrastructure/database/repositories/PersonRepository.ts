import Person from '/src/domain/models/Person';
import IPersonRepository from '/src/domain/repositories/IPersonRepository';

const data: Person[] = [
  {
    firstName: 'John',
    lastName: 'Cena',
  },
  {
    firstName: 'Freddie',
    lastName: 'Mercury',
  },
];

export default class PersonRepository implements IPersonRepository {
  async getPersonByFirstAndLastName(first: string, last: string): Promise<Person | null> {
    return data.find((p) => p.firstName === first && p.lastName === last) ?? null;
  }

  async getPersonByPartFirstname(partFirstname: string): Promise<Person[]> {
    return data.filter((person: Person) => 
      (person.firstName).includes(partFirstname)
    );
  }
}
