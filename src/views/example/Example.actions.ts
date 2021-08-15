export const EXAMPLE_FETCH = 'EXAMPLE_FETCH';
export const EXAMPLE_FETCH_SUCCESS = 'EXAMPLE_FETCH_SUCCESS';
export const EXAMPLE_FETCH_FAILED = 'EXAMPLE_FETCH_FAILED';

export const fetchExample = (data: Record<string, unknown>) => ({ type: EXAMPLE_FETCH, data });
export const fetchExampleSuccess = (data: Record<string, unknown>) => ({ type: EXAMPLE_FETCH_SUCCESS, data });
export const fetchExampleFailed = (data: Record<string, unknown>) => ({ type: EXAMPLE_FETCH_FAILED, data });
