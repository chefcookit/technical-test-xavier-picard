import IGetPersonQuery from '../../domain/queries/IGetPersonQuery';
import IPersonRepository from '../../domain/repositories/IPersonRepository';
import Person from '../../domain/models/Person';
import PersonNotFoundError from '../../domain/errors/PersonNotFoundError';

export default class GetPersonQuery implements IGetPersonQuery {
  private personRepository: IPersonRepository;

  constructor(params: { personRepository: IPersonRepository }) {
    this.personRepository = params.personRepository;
  }

  async execute(partFirstName: string): Promise<Person[]> {

    const persons = await this.personRepository.getPersonsByPartFirstName(partFirstName);

    if (persons.length < 1)
      throw new PersonNotFoundError(`Person with ${partFirstName} in its name is not found.`);

    return persons;
  }
}
