export interface IResponse<T>
{
  status: 'success' | 'error';
  result?: T;
  errorMessage: string;
}
