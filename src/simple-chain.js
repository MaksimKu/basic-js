const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  cep: '',
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.cep.split('~~').length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.cep.length === 0) {this.cep = `( ${value} )`} else {this.cep = this.cep + `~~( ${value} )`};
    return this
  },
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (typeof(position) !== 'number' || position > this.cep.split('~~').length || position < 1) {
      this.cep = '';
      throw new Error("You can't remove incorrect link!");
    }
    this.cep = this.cep.split("~~").filter((i,j) => j !== position - 1).join('~~')
    return this
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.cep = this.cep.split("~~").reverse().join("~~");
    return this
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let fCep = this.cep
    this.cep = ''
    return fCep;
  }
};

module.exports = {
  chainMaker
};
