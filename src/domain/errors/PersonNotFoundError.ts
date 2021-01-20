export default class PersonNotFoundError extends Error {
  constructor(message: string) {
    super(`[ PersonNotFoundError ] - ${message}`);
  }
}
