import Client from "../../core/entities/Client";

export interface ClientState {
  clients: Client[];
  isLoaded?: boolean;
}
