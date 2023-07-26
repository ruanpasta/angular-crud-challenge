import { clientReducer, initialState } from './client.reducer';
import { addClient, deleteClient, updateClient } from './client.actions';
import { ClientState } from './client.state';
import Client from '../core/entities/Client';
import { Status } from '../core/types/status.enum';

describe('clientReducer', () => {
  it('should return the initial state', () => {
    const action = {} as any;
    const state = clientReducer(undefined, action);

    expect(state).toBe(initialState);
  });

  it('should handle addClient', () => {
    const clientToAdd = new Client('Client One', '12345678901234', Status.Ativo);

    const action = addClient({ client: clientToAdd });
    const state = clientReducer(initialState, action);

    expect(state.clients).toContain(clientToAdd);
  });

  it('should handle updateClient', () => {
    const clientToUpdate = new Client('Client One', '12345678901234', Status.Ativo);
    const updatedClient = new Client('Updated Client One', '12345678901234', Status.Ativo);

    const initialState: ClientState = {
      clients: [clientToUpdate],
    };

    const action = updateClient({ updatedClient, oldClient: clientToUpdate });
    const state = clientReducer(initialState, action);

    expect(state.clients).toContain(updatedClient);
    expect(state.clients).not.toContain(clientToUpdate);
  });

  it('should handle deleteClient', () => {
    const clientToDelete = new Client('Client One', '12345678901234', Status.Ativo);


    const initialState: ClientState = {
      clients: [clientToDelete],
    };

    const action = deleteClient({ clientId: clientToDelete.getId() });
    const state = clientReducer(initialState, action);

    expect(state.clients).not.toContain(clientToDelete);
  });
});
