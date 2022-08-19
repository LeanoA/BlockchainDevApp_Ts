const Transaction = require('./transaction')

class Block {
  index: Number;
  previousHash : String;
  hash : String;
  nonce : Number;
  transactions : typeof Transaction[];

    constructor(){
        this.index = 0
        this.previousHash = ""
        this.hash = ""
        this.nonce = 0
        this.transactions = []
    }

    get key(){
        return JSON.stringify(this.transactions ) + this.index + this.previousHash + this.nonce
    }

    addTransaction(transaction) {
        this.transactions.push(transaction)
    }
}

module.exports = Block
export{}
