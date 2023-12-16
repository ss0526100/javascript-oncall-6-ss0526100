import VARIABLE_NAME from './constants/VARIABLE_NAME.js';
import CONFIG from './configs/CONFIG.js';

/*
Basic form in function Of Convert

VARIABLE_NAME.$name:(value, to)=>{
  ...
  return result;
}
*/

const Convert = {
  [VARIABLE_NAME.MONTH_INFO]: value => {
    const [month, dayWeek] = value
      .split(CONFIG.MONTH_INFO_DELIMITER)
      .map(string => string.trim());

    return { month: Number(month), dayWeek: CONFIG.DAY_WEEK.indexOf(dayWeek) };
  },

  [VARIABLE_NAME.WEEKDAY_LIST]: value => {
    const weekdayInfo = value
      .split(CONFIG.ONCALL_LIST_DELIMITER)
      .map(string => string.trim());

    return weekdayInfo;
  },
};

export default Convert;
