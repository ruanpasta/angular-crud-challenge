import { Status } from "../types/status.enum";
import Client from "./Client";

describe('Client', () => {
  let client: Client;

  beforeEach(() => {
    client = new Client('Test Client', '123456789');
  });

  it('should create a new instance of Client with correct values', () => {
    expect(client.getName()).toEqual('Test Client');
    expect(client.getCNPJ()).toEqual('123456789');
    expect(client.getStatus()).toEqual(Status.Ativo);
  });

  it('should change the status when calling changeStatus()', () => {
    expect(client.getStatus()).toEqual(Status.Ativo);
    client.changeStatus();
    expect(client.getStatus()).toEqual(Status.Inativo);
    client.changeStatus();
    expect(client.getStatus()).toEqual(Status.Ativo);
  });
});
