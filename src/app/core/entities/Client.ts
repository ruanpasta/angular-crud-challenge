import { Status } from "../types/status.enum"
import { v4 as uuidV4 } from 'uuid';


export default class Client {
  private id;

  constructor(private name: string, private cnpj: string, private status: Status = Status.Ativo) {
    this.id = uuidV4();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getCNPJ(): string {
    return this.cnpj;
  }

  getStatus(): Status {
    return this.status;
  }

  changeStatus() {
    return this.status = this.status === Status.Ativo ? Status.Inativo : Status.Ativo
  }
}
