import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers-validator.js';

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if all elements are numbers', () => {
    const validationResults = validator.isAllNumbers([1, 2, 3, 4]);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false if all elements are not numbers', () => {
    const validationResults = validator.isAllNumbers([1, 2, '3', 4]);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isAllNumbers('4');
    }).to.throw('[4] is not a number');
  });
});
