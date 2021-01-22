import IGetPersonQuery from '../../domain/queries/IGetPersonQuery';
import IPersonRepository from '../../domain/repositories/IPersonRepository';
import Person from '../../domain/models/Person';
import PersonNotFoundError from '../../domain/errors/PersonNotFoundError';

export default class GetPersonQuery implements IGetPersonQuery {
  private personRepository: IPersonRepository;

  constructor(params: { personRepository: IPersonRepository }) {
    this.personRepository = params.personRepository;
  }

  async execute(research: string): Promise<Person[]> {

    const persons = await this.personRepository.getPersonsByPartFirstName(research);

    if (persons.length < 1)
      throw new PersonNotFoundError(`Person with '${research["partFirstName"]}' in its name is not found.`);

    return persons;
  }
}
