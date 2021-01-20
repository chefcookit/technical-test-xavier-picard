import {asClass} from 'awilix';

import GetLunchBoxQuery from './queries/GetLunchBoxQuery';
import GetPersonQuery from './queries/GetPersonQuery';
import CreateLunchBoxOperation from './operations/CreateLunchBoxOperation';

export default {
  // Queries
  getLunchBoxQuery: asClass(GetLunchBoxQuery).singleton(),
  getPersonQuery: asClass(GetPersonQuery).singleton(),

  // Operations
  createLunchBoxOperation: asClass(CreateLunchBoxOperation).singleton()
}
