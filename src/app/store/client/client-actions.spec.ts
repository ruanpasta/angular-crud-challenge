import { addClient, updateClient, deleteClient } from './client.actions';
import Client from '../../core/entities/Client';
import { Status } from '../../core/types/status.enum';

describe('Client Actions', () => {
  it('should create an AddClient action', () => {
    const clientToAdd = new Client('Client One', '12345678901234', Status.Ativo);
    const action = addClient({ client: clientToAdd });

    expect(action.type).toBe('[Client] Add');
    expect(action.client).toEqual(clientToAdd);
  });

  it('should create an UpdateClient action', () => {
    const oldClient = new Client('Client One', '12345678901234', Status.Ativo);
    const updatedClient = new Client('Updated Client One', '12345678901234', Status.Ativo);
    const action = updateClient({ oldClient, updatedClient });

    expect(action.type).toBe('[Client] Update');
    expect(action.oldClient).toEqual(oldClient);
    expect(action.updatedClient).toEqual(updatedClient);
  });

  it('should create a DeleteClient action', () => {
    const clientId = '1';
    const action = deleteClient({ clientId });

    expect(action.type).toBe('[Client] Delete');
    expect(action.clientId).toBe(clientId);
  });
});
