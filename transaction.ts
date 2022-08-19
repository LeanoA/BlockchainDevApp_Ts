export default class Transaction {
  from : String;
  to : String;
  amount: Number;
  constructor(from : String, to: String, amount: Number){
      // Contructor de clase Transaction
      this.from = from
      this.to = to
      this.amount = amount
  }
}

// module.exports = Transaction
// export{}
