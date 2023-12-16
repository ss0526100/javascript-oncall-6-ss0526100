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

const checkMonth = month => {
  checkDigitIntegerString(month);
  checkNumberInRange(Number(month), 1, 12);
};

const checkDayWeek = dayWeek => {
  if (!CONFIG.DAY_WEEK.includes(dayWeek))
    throw new Error(ERROR_MESSAGE.INVALID_DAY_WEEK);
};

const checkSameStringElementArray = (arrayA, arrayB) => {
  if (!Is.sameStringElementArray(arrayA, arrayB))
    throw new Error(ERROR_MESSAGE.DIFFERENT_STRING_ELEMENT_ARRAY);
};

const checkOncallList = list => {
  list.forEach(name => {
    checkNumberInRange(
      name.length,
      CONFIG.NAME_LENGTH_LOWER,
      CONFIG.NAME_LENGTH_UPPER
    );
  });
  checkSameElementInArray(list);
};

const checkWeekdayList = list => {
  checkOncallList(list);
};

const checkHolidayList = (holidayList, weekdayList) => {
  checkOncallList(holidayList);
  checkSameStringElementArray(holidayList, weekdayList);
};

const CheckValidationOf = {
  [VARIABLE_NAME.MONTH_INFO]: string => {
    const [month, dayWeek] = string
      .split(CONFIG.MONTH_INFO_DELIMITER)
      .map(string => string.trim());

    checkMonth(month);
    checkDayWeek(dayWeek);
  },

  [VARIABLE_NAME.WEEKDAY_LIST]: string => {
    const oncallList = string
      .split(CONFIG.ONCALL_LIST_DELIMITER)
      .map(name => name.trim());

    checkWeekdayList(oncallList);
  },

  [VARIABLE_NAME.HOLIDAY_LIST]: (string, { weekday }) => {
    const oncallList = string
      .split(CONFIG.ONCALL_LIST_DELIMITER)
      .map(name => name.trim());

    checkHolidayList(oncallList, weekday);
  },
};

export default CheckValidationOf;
