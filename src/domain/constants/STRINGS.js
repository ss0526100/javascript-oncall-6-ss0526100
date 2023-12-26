import VARIABLE_NAME from './VARIABLE_NAME.js';

const errorHeader = '[ERROR] ';

const STRINGS = Object.freeze({
  INPUT_MESSAGE: Object.freeze({
    [VARIABLE_NAME.MONTH_INFO]:
      '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
    [VARIABLE_NAME.WEEKDAY_SEQUENCE]: `평일 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
    [VARIABLE_NAME.HOLIDAY_SEQUENCE]: `휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> `,
  }),

  ERROR_MESSAGE: Object.freeze({
    NOT_DIGIT: `${errorHeader}십진수가 아닙니다.`,
    NOT_INTEGER: `${errorHeader}정수가 아닙니다.`,
    NOT_DIGIT_INTEGER: `${errorHeader}십진수 정수가 아닙니다.`,
    NOT_NUMBER_IN_RANGE: `${errorHeader}범위 바깥의 수입니다.`,
    SAME_ELEMENT_IN_ARRAY: `${errorHeader}중복된 요소가 존재합니다.`,
    DIFFERENT_STRING_ELEMENT_ARRAY: `${errorHeader}다른 문자열을 갖고 있는 배열입니다.`,
    INVALID_DAY_WEEK: `${errorHeader}유효하지 않은 요일입니다.`,
    INVALID_INPUT: `${errorHeader}유효하지 않은 입력 값입니다. 다시 입력해 주세요.`,
  }),

  KOREAN_MONTH: '월',
  KOREAN_DATE: '일',
  HOLIDAY_MARK: '(휴일)',

  BLANK: '',
  SPACE: ' ',
});

export default STRINGS;
