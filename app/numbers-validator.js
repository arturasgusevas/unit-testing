/**
 * A simple class containing methods to validate numbers.
 */
export default class NumbersValidator {
  /**
   * Creates an instance of NumbersValidator.
   * @memberof NumbersValidator
   */
  constructor() {}
  /**
   *
   * @param {Number} number number to check
   * @return {Boolean} true if number is even
   * @memberof NumbersValidator
   */
  isNumberEven(number) {
    const typeOfVariable = typeof number;
    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(
        `[${number}] is not of type "Number" it is of type "${typeOfVariable}"`
      );
    } else {
      return number % 2 === 0;
    }
  }

  /**
   * @param {Array<Number>} arrayOfNumbers array of numbers to go through;
   * @return {Array<Number>} array of even numbers
   * @memberof NumbersValidator
   */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (
      Array.isArray(arrayOfNumbers) &&
      arrayOfNumbers.every((item) => typeof item === 'number')
    ) {
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array of 'Numbers'`);
    }
  }

  /**
   * @param {Array<Number>} arrayOfNumbers - The array to check.
   * @return {Boolean} True if all elements are numbers.
   * @memberof NumbersValidator
   */
  isAllNumbers(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers)) {
      throw new Error(`[${arrayOfNumbers}] is not an array`);
    }
    return arrayOfNumbers.every((n) => typeof n === 'number');
  }

  /**
   *
   * @param {Number} n - value to check
   * @return {Boolean} true if value is integer
   * @memberof NumbersValidator
   */
  isInteger(n) {
    if (typeof n !== 'number') {
      throw new Error(`[${n}] is not a number`);
    }
    return Number.isInteger(n);
  }
}
