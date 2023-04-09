class RequestError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = 'Request Error';
    this.message = `${status}: ${message}`;
    this.status = status;
  }
}

export { RequestError };
