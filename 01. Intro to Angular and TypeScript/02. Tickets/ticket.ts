export class Ticket {
  destination: string
  price: number
  status: string

  constructor(destination, price, status) {
    this.destination = destination;
    this.price = price;
    this.status = status;
  }
}