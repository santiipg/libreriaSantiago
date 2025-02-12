export class Recurso {
  id: number
  nombre: string

  constructor() {
    this.id = 0
    this.nombre = ''
  }

  toString(): string {
    return this.nombre
  }
}
