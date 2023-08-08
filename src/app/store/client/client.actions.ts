import { createAction, props } from '@ngrx/store';
import Client from '../../core/entities/Client';

export const addClient = createAction(
  '[Client] Add',
  props<{ client: Client }>(),
);

export const updateClient = createAction(
  '[Client] Update',
  props<{ updatedClient: Client, oldClient: Client }>(),
);

export const deleteClient = createAction(
  '[Client] Delete',
  props<{ clientId: string }>(),
);

export const changeClientLoad = createAction(
  '[Client] Load',
  props<{ isLoaded: boolean }>(),
);

