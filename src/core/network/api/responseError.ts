import { PROBLEM_CODE } from 'apisauce';


export class ResponseError<ErrorData = unknown> extends Error {
  status?: number;
  problem?: PROBLEM_CODE;
  message: string;
  data?: ErrorData;

  constructor(message: string, status: number, problem: PROBLEM_CODE, data?: ErrorData) {
    super();
    this.name = 'ResponseError';
    this.status = status;
    this.problem = problem;
    this.message = message;
    this.data = data;
  }
}
