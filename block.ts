import Transaction from './transaction'

export default class Block {
  index: number;
  previousHash : String;
  hash : String;
  nonce : number;
  transactions : Transaction[];

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

    addTransaction(transaction:Transaction) {
        this.transactions.push(transaction)
    }
}

// module.exports = Block
// export{}
