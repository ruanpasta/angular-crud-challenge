export default class Client {
  constructor(private name: string, private cnpj: string, private status: boolean = true) {}

  getName(): string {
    return this.name
  }

  getCNPJ(): string {
    return this.cnpj
  }

  getStatus(): boolean {
    return this.status
  }

  changeStatus() {
    return this.status = !this.status
  }
}
