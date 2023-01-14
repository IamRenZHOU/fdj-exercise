export class Player {
  _id: string = ''
  name: string = ''
  thumbnail: string = ''
  position: string = ''
  born: Date = new Date()
  signin: { amount: number, currency: string } = {
    amount: 123.12,
    currency: 'currency',
  }
}
