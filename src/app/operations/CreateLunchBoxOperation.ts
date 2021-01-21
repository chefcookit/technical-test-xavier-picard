import ICreateLunchBoxOperation from '/src/domain/operations/ICreateLunchBoxOperation';
import ILunchBoxRepository from '/src/domain/repositories/ILunchBoxRepository';
import IPersonRepository from '/src/domain/repositories/IPersonRepository';
import ICreateLunchBoxContract from '/src/domain/contracts/CreateLunchBoxContract';

export default class CreateLunchBoxOperation implements ICreateLunchBoxOperation {

  private lunchBoxRepository: ILunchBoxRepository;
  private personRepository: IPersonRepository;

  constructor(params: { lunchBoxRepository: ILunchBoxRepository, personRepository: IPersonRepository }) {
    this.lunchBoxRepository = params.lunchBoxRepository;
    this.personRepository = params.personRepository;
  }


  async execute(params: ICreateLunchBoxContract): Promise<void> {

    const person = await this.personRepository.getPersonByFirstAndLastName(params.owner.firstName, params.owner.lastName);

    if(!person)
      await this.personRepository.addPerson(params.owner);

    await this.lunchBoxRepository.addLunchBox(params);

  }

}
