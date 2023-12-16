import VARIABLE_NAME from './VARIABLE_NAME.js';

const errorHeader = '[ERROR] ';

const STRINGS = Object.freeze({
  INPUT_MESSAGE: Object.freeze({ [VARIABLE_NAME.HELLO]: 'dfdaf' }),
  ERROR_MESSAGE: Object.freeze({
    NOT_DIGIT: `${errorHeader}십진수가 아닙니다.`,
    NOT_INTEGER: `${errorHeader}정수가 아닙니다.`,
    NOT_DIGIT_INTEGER: `${errorHeader}십진수 정수가 아닙니다.`,
    NOT_NUMBER_IN_RANGE: `${errorHeader}범위 바깥의 수입니다.`,
    NOT_SAME_NUMBER: `${errorHeader}유효하지 않은 숫자입니다. 기대값 : `,
    SAME_ELEMENT_IN_ARRAY: `${errorHeader}중복된 요소가 존재합니다.`,
  }),

  OUPUT_MESSAGE: Object.freeze({}),

  BLANK: '',
  SPACE: ' ',
  DASH: '-',
  COLON: ':',
});

export default STRINGS;
