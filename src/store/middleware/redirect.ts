import { Middleware } from 'redux';
import { PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../root-reducer';
import browserHistory from '../../utils/browser-history';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

//TODO: check if this needed
