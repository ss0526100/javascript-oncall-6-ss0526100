const CONFIG = Object.freeze({
  MONTH_INFO_DELIMITER: ',',
  ONCALL_LIST_DELIMITER: ',',

  DAY_WEEK: ['월', '화', '수', '목', '금', '토', '일'],
  LAST_DAY_OF_MONTH: [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  NAME_LENGTH_LOWER: 1,
  NAME_LENGTH_UPPER: 5,

  ONCALL_LIST_LENGTH_LOWER: 5,
  ONCALL_LIST_LENGTH_UPPER: 35,
});

export default CONFIG;
