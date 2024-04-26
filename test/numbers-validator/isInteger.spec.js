import {expect} from 'chai';
import {describe, beforeEach, afterEach, it} from 'mocha';
import NumbersValidator from '../../app/numbers-validator.js';

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true if value is integer', () => {
    const validationResults = validator.isInteger(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false if value is not integer', () => {
    const validationResults = validator.isInteger(4.5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isInteger('abc');
    }).to.throw('[abc] is not a number');
  });
});
