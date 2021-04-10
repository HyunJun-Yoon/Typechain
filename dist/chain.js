"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, '432420592899', '', 'Hyunjun', 20210410);
let blockChain = [genesisBlock];
console.log(blockChain);
//# sourceMappingURL=chain.js.map