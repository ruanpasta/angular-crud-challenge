import { Status } from "../types/status.enum"

export default class Client {
  constructor(private name: string, private cnpj: string, private status: Status = Status.Ativo) {}

  getName(): string {
    return this.name
  }

  getCNPJ(): string {
    return this.cnpj
  }

  getStatus(): Status {
    return this.status
  }

  changeStatus() {
    return this.status = this.status === Status.Ativo ? Status.Inativo : Status.Ativo
  }
}
