export default class ErrorResponse extends Error {
  constructor(message, codeStatus) {
    super(message);
    this.codeStatus = codeStatus;
  }
}
