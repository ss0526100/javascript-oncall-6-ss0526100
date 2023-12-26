const WEEKDAY_STATE = 0;
const HOLIDAY_STATE = 1;

const CONFIG = Object.freeze({
  MONTH_INFO_DELIMITER: ',',
  ONCALL_SEQUENCE_DELIMITER: ',',

  DAY_WEEK_NAME: ['월', '화', '수', '목', '금', '토', '일'],
  LAST_DAY_OF_MONTH: [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  NAME_LENGTH_LOWER: 1,
  NAME_LENGTH_UPPER: 5,

  ONCALL_LIST_LENGTH_LOWER: 5,
  ONCALL_LIST_LENGTH_UPPER: 35,

  WEEKDAY_STATE,
  HOLIDAY_STATE,

  DAYWEEK_STATE: [
    WEEKDAY_STATE,
    WEEKDAY_STATE,
    WEEKDAY_STATE,
    WEEKDAY_STATE,
    WEEKDAY_STATE,
    HOLIDAY_STATE,
    HOLIDAY_STATE,
  ],

  SPECIAL_DAY: [
    null,
    [1], //1
    [], //2
    [1], //3
    [], //4
    [5], //5
    [6], //6
    [], //7
    [15], //8
    [], //9
    [3, 9], //10
    [], //11
    [25], //12
  ],
});

export default CONFIG;
