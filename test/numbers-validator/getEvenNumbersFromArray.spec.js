import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers-validator.js';

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return only even numbers from a mixed array', () => {
    const validationResults = validator.getEvenNumbersFromArray([
      1, 2, 3, 4, 5, 6
    ]);
    expect(validationResults).to.deep.equal([2, 4, 6]);
  });

  it('should return the same array if all elements are even', () => {
    const validationResults = validator.getEvenNumbersFromArray([2, 4, 6]);
    expect(validationResults).to.deep.equal([2, 4, 6]);
  });

  it('should return an empty array if all elements are odd', () => {
    const validationResults = validator.getEvenNumbersFromArray([1, 3, 5]);
    expect(validationResults).to.deep.equal([]);
  });

  it('should return an empty array if the input array is empty', () => {
    const validationResults = validator.getEvenNumbersFromArray([]);
    expect(validationResults).to.deep.equal([]);
  });

  it('should throw an error when contains non-number elements', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1, 'two', 3]);
    }).to.throw('[4] is not an array of "Numbers"');
  });
});
