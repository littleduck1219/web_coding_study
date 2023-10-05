import { createApi, BaseQueryFn } from "@reduxjs/toolkit/query";

export type BaseQueryFnType<Args = any, Result = unknown, Error = unknown, DefinitionExtraOptions = {}, Meta = {}> = (
	args: Args,
	api: BaseQueryApi,
	extraOptions: DefinitionExtraOptions
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;

export interface BaseQueryApi {
	signal: AbortSignal;
	dispatch: ThunkDispatch<any, any, any>;
	getState: () => unknown;
}

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
	| {
			error: E;
			data?: undefined;
			meta?: M;
	  }
	| {
			error?: undefined;
			data: T;
			meta?: M;
	  };
