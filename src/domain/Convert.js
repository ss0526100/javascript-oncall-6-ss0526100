import VARIABLE_NAME from './constants/VARIABLE_NAME.js';
import CONFIG from './configs/CONFIG.js';

const Convert = {
  [VARIABLE_NAME.MONTH_INFO]: value => {
    const [month, dayWeek] = value
      .split(CONFIG.MONTH_INFO_DELIMITER)
      .map(string => string.trim());

    return {
      month: Number(month),
      firstDayWeek: CONFIG.DAY_WEEK_NAME.indexOf(dayWeek),
    };
  },

  [VARIABLE_NAME.WEEKDAY_SEQUENCE]: value => {
    const weekdaySequence = value
      .split(CONFIG.ONCALL_SEQUENCE_DELIMITER)
      .map(string => string.trim());

    return weekdaySequence;
  },

  [VARIABLE_NAME.HOLIDAY_SEQUENCE]: value => {
    const holidaySequence = value
      .split(CONFIG.ONCALL_SEQUENCE_DELIMITER)
      .map(string => string.trim());

    return holidaySequence;
  },
};

export default Convert;
