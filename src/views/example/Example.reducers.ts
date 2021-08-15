import { ReduxAction, ReduxState } from '../../interfaces';
import { initialAction, initialState } from '../../constants';
import { EXAMPLE_FETCH, EXAMPLE_FETCH_FAILED, EXAMPLE_FETCH_SUCCESS } from './Example.actions';

export function ReducerExample(state: ReduxState = initialState, action: ReduxAction = initialAction) {
  switch (action.type) {
    case EXAMPLE_FETCH:
      return {
        ...state,
        fetch: true,
        data: action.data,
        action: action.type,
      };

    case EXAMPLE_FETCH_FAILED:
      return {
        ...state,
        fetch: false,
        res: action.data,
        action: action.type,
      };

    case EXAMPLE_FETCH_SUCCESS:
      return {
        ...state,
        fetch: false,
        err: action.data,
        action: action.type,
      };

    default:
      return state;
  }
}
