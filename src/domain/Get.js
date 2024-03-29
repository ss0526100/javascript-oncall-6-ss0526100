import Is from './Is.js';

import RoundQueue from '../class/RoundQueue.js';

import CONFIG from './configs/CONFIG.js';
import STRINGS from './constants/STRINGS.js';

const { KOREAN_MONTH, KOREAN_DATE, SPACE, HOLIDAY_MARK } = STRINGS;

const getOncallQueueObject = oncallSequence => {
  return {
    [CONFIG.WEEKDAY_STATE]: new RoundQueue(oncallSequence.weekday),
    [CONFIG.HOLIDAY_STATE]: new RoundQueue(oncallSequence.holiday),
  };
};

const getTodayState = (date, month, firstDayWeek) => {
  if (Is.specialDay(month, date)) return CONFIG.HOLIDAY_STATE;
  if (4 < getDayweekByDate(date, firstDayWeek)) return CONFIG.HOLIDAY_STATE;

  return CONFIG.WEEKDAY_STATE;
};

const getDayweekByDate = (date, firstDayWeek) => {
  return (date - 1 + firstDayWeek) % 7;
};

const Get = {
  oncallSchedule: (monthInfo, oncallSequence) => {
    const oncallQueueOf = getOncallQueueObject(oncallSequence);
    const { month, firstDayWeek } = monthInfo;
    let lastOncaller;
    const result = [null];

    for (let date = 1; date <= CONFIG.LAST_DAY_OF_MONTH[month]; date++) {
      const todayQueue =
        oncallQueueOf[getTodayState(date, month, firstDayWeek)];

      if (lastOncaller === todayQueue.seek()) todayQueue.swapNowAndNext();
      lastOncaller = todayQueue.getNow();
      result.push(lastOncaller);
    }
    return result;
  },

  oncallScheduleString: (date, oncallSchedule, monthInfo) => {
    const { month, firstDayWeek } = monthInfo;

    let result = `${month}${KOREAN_MONTH}${SPACE}${date}${KOREAN_DATE}${SPACE}${
      CONFIG.DAY_WEEK_NAME[getDayweekByDate(date, firstDayWeek)]
    }`;

    if (getDayweekByDate(date, firstDayWeek) < 5 && Is.specialDay(month, date))
      result += HOLIDAY_MARK;
    result += `${SPACE}${oncallSchedule[date]}`;

    return result;
  },
};

export default Get;
