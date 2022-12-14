const sha256 = require('js-sha256')
import Block from './block';
import Transaction from './transaction'

export default class Blockchain {
  blocks: Block[];

  constructor (genesisBlock: Block) {
      this.blocks =  []
      this.addBlock(genesisBlock)
  }

  addBlock(block: Block){
      if(this.blocks.length == 0) {
          block.previousHash = "0000000000000000" // 16 ceros va a ser el Hash Previo
          block.hash = this.generateHash(block)
      }

      this.blocks.push(block)
  }

  getNextBlock(transaccions: Transaction[]) {
      // Creo el nuevo bloque
      const block = new Block()
      transaccions.forEach( (transaccion) => {
          block.addTransaction(transaccion)
      })

      // Necesito informacion del bloque anterior
      const previousBlock = this.getPreviousBlock()

      // Creamos el indice
      block.index = this.blocks.length

      // Obtenosmo el hash anterior
      block.previousHash = previousBlock.hash

      block.hash = this.generateHash(block)

      return block
  }

  getPreviousBlock(){
      return this.blocks[ this.blocks.length -1 ]
  }

  generateHash(block: Block) {
      let hash = sha256(block.key)

      // Pedimos que comience con 4 ceros
      // para obtener el hash real
      while(!hash.startsWith('0000')) {
          block.nonce += 1
          hash = sha256(block.key)
          console.log(hash)
      }

      return hash
  }
}

// module.exports = Blockchain
// export{}
