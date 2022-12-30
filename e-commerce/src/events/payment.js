export default class Payment {
  constructor(paymentSubject) {
    this.paymentSubject = paymentSubject
  }
  creditCard({ id, userName, age }) {
    console.log(`\na payment occured from ${userName}`)
    this.paymentSubject.notify({ id, userName })
  }
}
