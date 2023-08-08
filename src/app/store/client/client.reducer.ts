import { createReducer, on } from '@ngrx/store';
import { addClient, changeClientLoad, deleteClient, updateClient } from './client.actions';
import { ClientState } from './client.state';

export const initialState: ClientState = {
  clients: [],
  isLoaded: false
};

export const clientReducer = createReducer(
  initialState,

  on(addClient, (state, { client }) => ({
    ...state,
    clients: [...state.clients, client],
  })),

  on(updateClient, (state, { updatedClient, oldClient }) => {
    const updatedClients = state.clients.map((client) => {
      return client.getId() === oldClient.getId()
        ? updatedClient
        : client;
    });
    return { ...state, clients: updatedClients };
  }),

  on(deleteClient, (state, { clientId }) => ({
    ...state,
    clients: state.clients.filter((client) => client.getId() !== clientId),
  })),

  on(changeClientLoad, (state, { isLoaded }) => ({
    ...state,
    isLoaded
  }))
);
