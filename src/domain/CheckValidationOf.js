import Is from './Is.js';

import CONFIG from './configs/CONFIG.js';
import STRINGS from './constants/STRINGS.js';
import VARIABLE_NAME from './constants/VARIABLE_NAME.js';

const { ERROR_MESSAGE } = STRINGS;

const checkDigitIntegerString = string => {
  try {
    checkDigitString(string);
    checkInteger(Number(string));
  } catch (error) {
    throw new Error(ERROR_MESSAGE.NOT_DIGIT_INTEGER);
  }
};

const checkDigitString = string => {
  if (!Is.digitString(string)) throw new Error(ERROR_MESSAGE.NOT_DIGIT);
};

const checkInteger = number => {
  if (!Number.isInteger(number)) throw new Error(ERROR_MESSAGE.NOT_INTEGER);
};

const checkNumberInRange = (number, lower, upper) => {
  if (!Is.numberInRange(number, lower, upper))
    throw new Error(ERROR_MESSAGE.NOT_NUMBER_IN_RANGE);
};

const checkSameNumber = (number, standard) => {
  if (number !== standard)
    throw new Error(ERROR_MESSAGE.NOT_SAME_NUMBER + standard);
};

const checkSameElementInArray = array => {
  if (array.length !== new Set(array).size) {
    throw new Error(ERROR_MESSAGE.SAME_ELEMENT_IN_ARRAY);
  }
};

const CheckValidationOf = {
  [VARIABLE_NAME.HELLO]: () => {},
};

export default CheckValidationOf;
