import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export type Err = {
  status: string;
  error: string;
};

export type BaseQueryFn<
  Args = string | undefined,
  Result = unknown,
  Error = Err,
  DefinitionExtraOptions = never,
  Meta = never
> = (
  args: Args,
  api: BaseQueryApi,
  extraOptions: DefinitionExtraOptions
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;

export interface BaseQueryApi {
  signal: AbortSignal;
  dispatch: unknown;
  getState: () => unknown;
}
